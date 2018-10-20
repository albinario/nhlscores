import Config from './Config';

const headers = { 'Authorization': 'Basic ' + btoa(`${Config.apiKey}:${Config.pass}`) }

const Connect = {
  connectMainAPI(date) {
    //console.log("Connect: mainAPI()");
    return fetch(`${Config.apiUrl}games.json?date=${date}`, {
      headers: headers
    }).then(response => {
      return response.json();
    })
  },
  connectGameAPI(gameId) {
    //console.log("Connect: gameAPI()");
    return fetch(`${Config.apiUrl}games/${gameId}/boxscore.json`, {
      headers: headers
    }).then(response => {
      return response.json();
    })
  },
  connectTeamAPI(teamId) {
    //console.log("Connect: teamAPI()");
    return fetch(`${Config.apiUrl}team_stats_totals.json?team=${teamId}`, {
      headers: headers
    }).then(response => {
      return response.json();
    })
  }
}

export default Connect;
