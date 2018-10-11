import Connect from './Connect';
import { getTodaysGames } from './Filters';

const GamesFeed = {
  getGames(date) {
    return Connect.connect(date).then(response => {
         return response.json();
       }).then(jsonResponse => {
         //get date from jsonResponse to determine what filtering method to use
         //today
         return getTodaysGames(jsonResponse);
             
        //completed games
        //    return jsonResponse.games.filter(ps => ps.schedule.playedStatus === "COMPLETED").reverse().map(game => {
        //      return {
        //        gameId: game.schedule.id,
        //        homeTeam: game.schedule.homeTeam.abbreviation,
        //        homeScore: game.score.homeScoreTotal,
        //        awayTeam: game.schedule.awayTeam.abbreviation,
        //        awayScore: game.score.awayScoreTotal
        //      }
        //    });
        //  }
       }).catch(err => {
         console.log(err);
       });
  }
}

export default GamesFeed;
