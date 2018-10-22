import Connect from './Connect';

const TeamsFeed = {
  getTeamRecord(teamId) {
    //console.log("TeamsFeed: getTeamStats()");
    return Connect.connectTeamAPI(teamId).then(jsonResponse => {
      if (jsonResponse) {
        return {
          wins: jsonResponse.teamStatsTotals[0].stats.standings.wins + jsonResponse.teamStatsTotals[0].stats.standings.overtimeWins,
          losses: jsonResponse.teamStatsTotals[0].stats.standings.losses,
          overtimeLosses: jsonResponse.teamStatsTotals[0].stats.standings.overtimeLosses
        }
      }
    }).catch(err => {
      console.log(err);
    })
  }
}

export default TeamsFeed;
