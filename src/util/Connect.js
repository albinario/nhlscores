import Config from './Config';

const Connect = {
  connect() {
    return fetch(`${Config.url1819}`, {
      headers: {
        "Authorization": `Basic ` + btoa(`${Config.apiKey}` + `:` + `${Config.pass}`)
      }
    })
  }
}

export default Connect;
