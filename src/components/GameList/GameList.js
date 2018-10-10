import React, { Component } from 'react';
import Game from '../Game/Game';

class GameList extends Component {
  render() {
    return (
      <div className="">
        {
          this.props.games.map(game => {
              return (
                <Game
                  key={game.gameId}
                  homeTeamCity={game.homeTeamCity}
                  homeTeamName={game.homeTeamName}
                  homeScore={game.homeScore}
                  awayTeamCity={game.awayTeamCity}
                  awayTeamName={game.awayTeamName}
                  awayScore={game.awayScore}
                />
              );
          })
        }
      </div>
    );
  }
}

export default GameList;
