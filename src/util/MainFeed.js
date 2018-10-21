import Connect from './Connect';
import GamesFeed from './GamesFeed';
import TeamsFeed from './TeamsFeed';

const MainFeed = {
  getGames(date) {
    //console.log("GamesFeed: getGames()");
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
        })
        TeamsFeed.getTeamRecord(awayTeamInfo[0].id).then(record => {
          awayRecord.push(record.wins, record.losses, record.overtimeLosses);
        })
        //console.log(homeRecord);
        let playedStatus = false;
        if (game.schedule.playedStatus === "COMPLETED") {
          playedStatus = true;
        }
        let goals = [];
        let homeGoalies = [];
        let awayGoalies = [];
        if (playedStatus) {
          GamesFeed.getPeriods(game.schedule.id).then(periods => {
            return periods.map(period => {
              return period.scoringPlays.map(scoringPlay => {
                return goals.push(scoringPlay);
              })
            })
          })
          GamesFeed.getGoalies(game.schedule.id).then(goalies => {
            homeGoalies.push(goalies.homeGoalies);
            awayGoalies.push(goalies.awayGoalies);
          });
        }

        return {
          gameId: game.schedule.id,
          //playedStatus: playedStatus,
          homeTeamId: homeTeamInfo[0].id,
          homeTeamCity: homeTeamInfo[0].city,
          homeTeamName: homeTeamInfo[0].name,
          homeRecord: homeRecord,
          homeScoreTotal: game.score.homeScoreTotal,
          homePeriods: homePeriods,
          homeGoalies: homeGoalies,
          awayTeamId: awayTeamInfo[0].id,
          awayTeamCity: awayTeamInfo[0].city,
          awayTeamName: awayTeamInfo[0].name,
          awayRecord: awayRecord,
          awayScoreTotal: game.score.awayScoreTotal,
          awayPeriods: awayPeriods,
          awayGoalies: awayGoalies,
          goals: goals
        }
      });
    }).catch(err => {
      console.log(err);
    });
  }
}

export default MainFeed;
