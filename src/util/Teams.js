import Config from './Config';
import Connect from '.Connect';

const GamesFeed = {
  getGames() {
    Connect.connect().then(response => {
         return response.json();
       }).then(jsonResponse => {
         if (jsonResponse) {
           return jsonResponse.games.filter(ps => ps.schedule.playedStatus === "COMPLETED").reverse().map(game => {
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
