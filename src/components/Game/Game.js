import React, { Component } from 'react';

class Game extends Component {

  render() {
    return (
      <div className="card mb-2">
        <div className="card-header">Date Place</div>
        <div className="card-body">
          <p className="card-text">{this.props.awayTeam} {this.props.awayScore}</p>
          <p className="card-text">{this.props.homeTeam} {this.props.homeScore}</p>
        </div>
      </div>
    );
  }
}

export default Game;
