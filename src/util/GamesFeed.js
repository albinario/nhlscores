import Connect from './Connect';
import { getGames } from './Filters';

const GamesFeed = {
  getGames(date) {
    return Connect.connect(date).then(response => {
         return response.json();
       }).then(jsonResponse => {
         console.log(jsonResponse)
         //Now we are returning games on specific dates  
         return getGames(jsonResponse);

       }).catch(err => {
         console.log(err);
       });
  }
}

export default GamesFeed;
