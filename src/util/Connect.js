import Config from './Config';

const headers = { "Authorization": `Basic ` + btoa(`${Config.apiKey}:${Config.pass}`) }

const Connect = {
  connectMainAPI() {
    return fetch(`${Config.url1819}`, {
      headers: headers
    }).then(response => {
      return response.json();
    })
  },
  connectGameAPI(gameId) {
    return fetch(`https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/games/${gameId}/boxscore.json`, {
      headers: headers
    }).then(response => {
      return response.json();
    })
  }
}

export default Connect;
