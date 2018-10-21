import React, { Component } from 'react';
import Game from '../Game/Game';

class GameList extends Component {
  render() {
    console.log("GameList: render()");
    return (
      this.props.games.length > 0 ?
        this.props.games.map((game, index) => {
          return (
            <Game
              key={index}
              gameId={game.gameId}
              playedStatus={game.playedStatus}
              goals={game.goals}
              homeTeamId={game.homeTeamId}
              homeTeamCity={game.homeTeamCity}
              homeTeamName={game.homeTeamName}
              homeRecord={game.homeRecord}
              homeScoreTotal={game.homeScoreTotal}
              homePeriods={game.homePeriods}
              homeGoalies={game.homeGoalies}
              awayTeamId={game.awayTeamId}
              awayTeamCity={game.awayTeamCity}
              awayTeamName={game.awayTeamName}
              awayRecord={game.awayRecord}
              awayScoreTotal={game.awayScoreTotal}
              awayPeriods={game.awayPeriods}
              awayGoalies={game.awayGoalies}
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
