import React, { Component } from 'react';
import GamesFeed from '../../util/GamesFeed';
import Goal from '../Goal/Goal';
var Collapse = require('react-bootstrap/lib/Collapse');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      goals: []
    }
  }

  componentWillMount() {
    GamesFeed.getPeriods(this.props.gameId).then(periods => {
      return periods.map(period => {
        return period.scoringPlays.map(goal => {
          return this.state.goals.push(goal);
        })
      })
    })
  }

  render() {
    let homeScore = 0;
    let awayScore = 0;
    return (
      <div className="well well-sm" onClick={() => this.setState({show: !this.state.show})}>
          <p>{this.props.awayTeamCity} {this.props.awayTeamName} {this.props.awayScore}</p>
          <p>{this.props.homeTeamCity} {this.props.homeTeamName} {this.props.homeScore}</p>
        <Collapse in={this.state.show}>
          <div>
          {
            this.state.goals.map((goal, index) => {
              if (goal.team.id === this.props.homeTeamId) {
                homeScore++;
              } else {
                awayScore++;
              }
              const playDesc = goal.playDescription.replace(/Goal scored by/g, "");
              return (
                <Goal
                  key={index}
                  homeScore={homeScore}
                  awayScore={awayScore}
                  playDesc={playDesc}
                />
              );
            })
          }
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Game;
