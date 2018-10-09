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
           return jsonResponse.games.filter(ps => ps.schedule.playedStatus === "COMPLETED").map(game => {
             return {
               gameId: game.schedule.id,
               homeTeam: game.schedule.homeTeam.abbreviation,
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
