import Connect from './Connect';

const GamesFeed = {
  getGames() {
    return Connect.connectMainAPI().then(jsonResponse => {
      if (jsonResponse) {
        return jsonResponse.games.reverse().map(game => {
          const homeTeamInfo = jsonResponse.references.teamReferences.filter(team => { return team.id === game.schedule.homeTeam.id; });
          const awayTeamInfo = jsonResponse.references.teamReferences.filter(team => { return team.id === game.schedule.awayTeam.id; });
          // const homePeriods = game.score.periods.map(period => {
          //   console.log(period);
          //   return {
          //
          //   }
          // });
          return {
            gameId: game.schedule.id,
            homeTeamId: homeTeamInfo[0].id,
            homeTeamCity: homeTeamInfo[0].city,
            homeTeamName: homeTeamInfo[0].name,
            homeScore: game.score.homeScoreTotal,
            awayTeamId: awayTeamInfo[0].id,
            awayTeamCity: awayTeamInfo[0].city,
            awayTeamName: awayTeamInfo[0].name,
            awayScore: game.score.awayScoreTotal
          }
        });
      }
    }).catch(err => {
      console.log(err);
    });
  },
  getPeriods(gameId) {
    return Connect.connectGameAPI(gameId).then(jsonResponse => {
      if (jsonResponse) {
        return jsonResponse.scoring.periods;
      }
    }).catch(err => {
      console.log(err);
    })
  }
}

export default GamesFeed;
