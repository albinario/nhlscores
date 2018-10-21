import React, { Component } from 'react';
import './Goal.css';
import Logos from '../../util/Logos';

class Goal extends Component {
  render() {
    console.log("Goal: render()");
    return (
      <div className="row">
        <div className="col-xs-1 text-center">{this.props.homeScore}-{this.props.awayScore}</div>
        <div className="col-xs-10"><img src={Logos[this.props.scoringTeamId]} className="img-goal" alt="" /> {this.props.playDesc}</div>
      </div>
    );
  }
}

export default Goal;
