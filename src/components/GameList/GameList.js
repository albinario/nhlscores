import React, { Component } from 'react';
import Game from '../Game/Game';

class GameList extends Component {
  render() {
    //console.log("render GameList");
    return (
      this.props.games.length > 0 ?
        this.props.games.map((game, index) => {
          return (
            <Game
              key={index}
              gameId={game.gameId}
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
