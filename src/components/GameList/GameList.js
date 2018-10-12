import React, { Component } from 'react';
import Game from '../Game/Game';

class GameList extends Component {
  render() {
    return (
      this.props.games.length > 0 ? 
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
      :
      <div>No games Scehduled for today</div>

    );
  }
}

export default GameList;
