import React, { Component } from 'react';
import Game from '../Game/Game';

class GameList extends Component {
  render() {
    return (
      <div className="">
        {
          this.props.games.reverse().map(game => {
              return (
                <Game
                  key={game.gameId}
                  homeTeam={game.homeTeam}
                  homeScore={game.homeScore}
                  awayTeam={game.awayTeam}
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
