import Connect from './Connect';

const TeamsFeed = {
  getTeamStats(teamId) {
    return Connect.connectTeamAPI(teamId).then(jsonResponse => {
      if (jsonResponse) {
        return jsonResponse.teamStatsTotals[0].stats;
      }
    }).catch(err => {
      console.log(err);
    })
  }
}

export default TeamsFeed;
