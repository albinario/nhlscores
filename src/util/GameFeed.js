import Connect from './Connect';

const GameFeed = {
  getPeriods(gameId) {
    //console.log("GamesFeed: getPeriods()");
    return Connect.connectGameAPI(gameId).then(jsonResponse => {
      if (jsonResponse) {
        return jsonResponse.scoring.periods;
      }
    }).catch(err => {
      console.log(err);
    })
  },
  getPlayers(gameId) {
    return Connect.connectGameAPI(gameId).then(jsonResponse => {
      if (jsonResponse) {
        return {
          awayGoalies: jsonResponse.stats.away.players.filter(player => {return player.player.position === 'G'}),
          homeGoalies: jsonResponse.stats.home.players.filter(player => {return player.player.position === 'G'}),
          awaySkaters: jsonResponse.stats.away.players.filter(player => {return player.player.position !== 'G'}),
          homeSkaters: jsonResponse.stats.home.players.filter(player => {return player.player.position !== 'G'}),
        }
      }
    }).catch(err => {
      console.log(err);
    })
  }
}

export default GameFeed;
