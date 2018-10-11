
export function getTodaysGames(json){
    return json.games.map((game)=>{
        const homeTeamInfo = json.references.teamReferences.filter((team) => { 
            return team.id === game.schedule.homeTeam.id; 
        });

        const awayTeamInfo = json.references.teamReferences.filter((team) => { 
            return team.id === game.schedule.awayTeam.id; 
        });

        // console.log('h',homeTeamInfo)
        // console.log('a', awayTeamInfo)
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

   
       
  

}

