import React, { Component } from 'react';
import Game from '../Game/Game';

class GameList extends Component {
  render() {
    return (
      <div className="">
        {
          this.props.games.map((game, index) => {
              return (
                <Game
                  key={index}
                  gameId={game.gameId}
                  homeTeamId={game.homeTeamId}
                  homeTeamCity={game.homeTeamCity}
                  homeTeamName={game.homeTeamName}
                  homeScore={game.homeScore}
                  awayTeamId={game.awayTeamId}
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
