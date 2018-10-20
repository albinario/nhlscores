import React, { Component } from 'react';
import Game from '../Game/Game';
//import TeamsFeed from '../../util/TeamsFeed';

class GameList extends Component {
  render() {
    //console.log("GameList: render()");
    return (
      this.props.games.length > 0 ?
        this.props.games.map((game, index) => {
          //console.log("Rendering game " + game.gameId);
          return (
            <Game
              key={index}
              gameId={game.gameId}
              playedStatus={game.playedStatus}
              homeTeamId={game.homeTeamId}
              homeTeamCity={game.homeTeamCity}
              homeTeamName={game.homeTeamName}
              homeScore={game.homeScore}
              homePeriods={game.homePeriods}
              awayTeamId={game.awayTeamId}
              awayTeamCity={game.awayTeamCity}
              awayTeamName={game.awayTeamName}
              awayScore={game.awayScore}
              awayPeriods={game.awayPeriods}
            />
          );
        })
      :
      <div>
        No games scheduled this day
      </div>
    );
  }
}

export default GameList;
