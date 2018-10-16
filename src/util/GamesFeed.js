import Connect from './Connect';

const GamesFeed = {
  getGames(date) {
    return Connect.connect(date).then(response => {
         return response.json();
       }).then(jsonResponse => { 
          return jsonResponse.games.map((game)=>{
          const homeTeamInfo = jsonResponse.references.teamReferences.filter((team) => { 
              return team.id === game.schedule.homeTeam.id; 
          });
  
          const awayTeamInfo = jsonResponse.references.teamReferences.filter((team) => { 
              return team.id === game.schedule.awayTeam.id; 
          });
  
          return {
              gameId: game.schedule.id,
              homeTeamCity: homeTeamInfo[0].city,
              homeTeamName: homeTeamInfo[0].name,
              homeScore: game.score.homeScoreTotal,
              awayTeamCity: awayTeamInfo[0].city,
              awayTeamName: awayTeamInfo[0].name,
              awayScore: game.score.awayScoreTotal
            }
  
      }); 

       }).catch(err => {
       });
  }
}

export default GamesFeed;
