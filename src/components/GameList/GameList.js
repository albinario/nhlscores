import React, { Component } from 'react';
import Game from '../Game/Game';

class GameList extends Component {
  render() {
    return (
      this.props.games.length > 0 ? 
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
                  homePeriods={game.homePeriods}
                  awayTeamId={game.awayTeamId}
                  awayTeamCity={game.awayTeamCity}
                  awayTeamName={game.awayTeamName}
                  awayScore={game.awayScore}
                  awayPeriods={game.awayPeriods}
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
