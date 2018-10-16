import Config from './Config';

const Connect = {
  connect(date) {
    //Receives date from App and passed into URL
    let selectedDate;
    if(date) {
       selectedDate = `${Config.urlDate}${date}`;
    }
    else {
      //handle error
    }
    return fetch(selectedDate, {
      headers: {
        "Authorization": `Basic ` + btoa(`${Config.apiKey}` + `:` + `${Config.pass}`)
      }
    })
  }
}

export default Connect;
