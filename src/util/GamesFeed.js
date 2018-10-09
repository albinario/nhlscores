import Config from './Config';

const GamesFeed = {
  getGames() {
    return fetch(`${Config.url1819}`, {
         headers: {
           "Authorization": `Basic ` + btoa(`${Config.apiKey}` + `:` + `${Config.pass}`)
         }
       }).then(response => {
         return response.json();
       }).then(jsonResponse => {
         if (jsonResponse) {
           //console.log(jsonResponse);
           return jsonResponse.games.filter(ps => ps.schedule.playedStatus === "COMPLETED").map(game => {
             // const homeTeamId = game.schedule.homeTeam.id;
             // const homeTeamArr = homeTeamId-1;
             // console.log(homeTeamArr);
             //console.log(jsonResponse.references.teamreferences.id[homeTeamId-1].name);
             //const homeTeamName = jsonResponse.references.teamreferences.find(id => id.id === homeTeamId);
             return {
               gameId: game.schedule.id,
               homeTeam: game.schedule.homeTeam.abbreviation,
               //homeTeam: jsonResponse.references.teamreferences.id[homeTeamId-1].name,
               homeScore: game.score.homeScoreTotal,
               awayTeam: game.schedule.awayTeam.abbreviation,
               awayScore: game.score.awayScoreTotal
             }
           });
         }
       }).catch(err => {
         console.log(err);
       });
  }
}

export default GamesFeed;
