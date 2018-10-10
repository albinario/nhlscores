import Config from './Config';

const Connect = {
  connectMainAPI() {
    return fetch(`${Config.url1819}`, {
      headers: {
        "Authorization": `Basic ` + btoa(`${Config.apiKey}` + `:` + `${Config.pass}`)
      }
    }).then(response => {
      return response.json();
    })
  }
}

export default Connect;
