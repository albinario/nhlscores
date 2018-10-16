import Config from './Config';

const headers = { 'Authorization': 'Basic ' + btoa(`${Config.apiKey}:${Config.pass}`) }

const Connect = {
  connectMainAPI() {
    return fetch(`${Config.apiUrl}games.json?status=final`, {
      headers: headers
    }).then(response => {
      return response.json();
    })
  },
  connectGameAPI(gameId) {
    return fetch(`${Config.apiUrl}games/${gameId}/boxscore.json`, {
      headers: headers
    }).then(response => {
      return response.json();
    })
  },
  connectTeamAPI(teamId) {
    return fetch(`${Config.apiUrl}team_stats_totals.json?team=${teamId}`, {
      headers: headers
    }).then(response => {
      return response.json();
    })
  }
}

export default Connect;
