import Config from './Config';

const Connect = {
  connect(date) {
    //Receives page url and determines what api call to make
    let selectedGame;
    switch(date) {
      case "today":
          selectedGame = `${Config.urlToday}`
          break;
      case "tomorrow":
          selectedGame = `${Config.urlTomorrow}`
          break;
      case "yesterday":
          selectedGame = `${Config.urlYesterday}`
          break;
      case 'http://localhost:3000/all-data':
          selectedGame = `${Config.url1819}`
          break;
      default:
          break;
    }

    return fetch(selectedGame, {
      headers: {
        "Authorization": `Basic ` + btoa(`${Config.apiKey}` + `:` + `${Config.pass}`)
      }
    })
  }
}

export default Connect;
