import React, { Component } from 'react';

class Game extends Component {

  render() {
    return (
      <div className="card mb-2">
        <div className="card-body">
          <p className="card-text">{this.props.awayTeamCity} {this.props.awayTeamName} {this.props.awayScore}</p>
          <p className="card-text">{this.props.homeTeamCity} {this.props.homeTeamName} {this.props.homeScore}</p>
        </div>
      </div>
    );
  }
}

export default Game;
