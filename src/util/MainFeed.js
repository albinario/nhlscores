import Connect from './Connect';
import GameFeed from './GameFeed';
import TeamsFeed from './TeamsFeed';

const MainFeed = {
  getGames(date) {
    return Connect.connectMainAPI(date).then(jsonResponse => {
      return jsonResponse.games.map((game)=> {
        const homeTeamInfo = jsonResponse.references.teamReferences.filter(team => { return team.id === game.schedule.homeTeam.id; });
        const awayTeamInfo = jsonResponse.references.teamReferences.filter(team => { return team.id === game.schedule.awayTeam.id; });
        let homePeriods = [];
        let awayPeriods = [];
        game.score.periods.forEach(period => {
          homePeriods.push(period.homeScore);
          awayPeriods.push(period.awayScore);
        });
        let homeRecord = [];
        let awayRecord = [];
        TeamsFeed.getTeamRecord(homeTeamInfo[0].id).then(record => {
          homeRecord.push(record.wins, record.losses, record.overtimeLosses);
        });
        TeamsFeed.getTeamRecord(awayTeamInfo[0].id).then(record => {
          awayRecord.push(record.wins, record.losses, record.overtimeLosses);
        });
        let playedStatus = false;
        if (game.schedule.playedStatus === "COMPLETED") {
          playedStatus = true;
        }
        let periodsArray = [];
        let homeGoalies = [];
        let awayGoalies = [];
        let homeSkaters = [];
        let awaySkaters = [];
        if (playedStatus) {
          GameFeed.getPeriods(game.schedule.id).then(periods => {
            return periods.map(period => {
              return periodsArray.push(period);
            })
          })
          GameFeed.getPlayers(game.schedule.id).then(players => {
            homeGoalies.push(players.homeGoalies);
            awayGoalies.push(players.awayGoalies);
            homeSkaters.push(players.homeSkaters);
            awaySkaters.push(players.awaySkaters);
          });
        }
        return {
          gameId: game.schedule.id,
          homeTeamId: homeTeamInfo[0].id,
          homeTeamCity: homeTeamInfo[0].city,
          homeTeamName: homeTeamInfo[0].name,
          homeRecord: homeRecord,
          homeScoreTotal: game.score.homeScoreTotal,
          homePeriods: homePeriods,
          homeGoalies: homeGoalies,
          homeSkaters: homeSkaters,
          awayTeamId: awayTeamInfo[0].id,
          awayTeamCity: awayTeamInfo[0].city,
          awayTeamName: awayTeamInfo[0].name,
          awayRecord: awayRecord,
          awayScoreTotal: game.score.awayScoreTotal,
          awayPeriods: awayPeriods,
          awayGoalies: awayGoalies,
          awaySkaters: awaySkaters,
          playedStatus: playedStatus,
          periods: periodsArray
        }
      });
    }).catch(err => {
      console.log(err);
    });
  }
}

export default MainFeed;
