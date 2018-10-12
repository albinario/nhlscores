import React, { Component } from 'react';
import GameStats from '../GameStats/GameStats';
var Collapse = require('react-bootstrap/lib/Collapse');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div className="well well-sm" onClick={() => this.setState({ show: !this.state.show })}>
          <p>{this.props.awayTeamCity} {this.props.awayTeamName} {this.props.awayScore}</p>
          <p>{this.props.homeTeamCity} {this.props.homeTeamName} {this.props.homeScore}</p>
        <Collapse in={this.state.show}>
         <div>
          <GameStats gameId={this.props.gameId} />
         </div>
        </Collapse>
      </div>
    );
  }
}

export default Game;
