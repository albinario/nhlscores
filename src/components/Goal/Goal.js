import React, { Component } from 'react';
import './Goal.css';
import Logos from '../../util/Logos';

class Goal extends Component {
  render() {
    console.log("Goal: render()");
    const playDesc = this.props.scoringPlay.playDescription.replace("Goal scored by", "").replace("(Empty Net)", "").replace(", assisted by ", " (").replace(" and", ",").replace(/\./g, "").replace("(unassisted)", "(unassisted").replace("Shootout attempt by ", " – ").replace(", scored!", "");
    const periodSecondsElapsed = this.props.scoringPlay.periodSecondsElapsed;
    const minutes = Math.floor(periodSecondsElapsed / 60);
    const seconds = ('0' + (periodSecondsElapsed % 60)).slice(-2);
    let show = true;
    if (this.props.periodFigure === 'PS') {
      show = false;
    }
    return (
      <div className="row">
        {show ?
          <div className="col-xs-1 text-center">{this.props.homeScore}-{this.props.awayScore}</div>
          :
          <div className="col-xs-1"></div>
        }
        <div className="col-xs-10">
          <img src={Logos[this.props.scoringPlay.team.id]} className="img-goal" alt="" /> {this.props.periodFigure} {show && <span> {minutes}:{seconds} – </span>}{playDesc}{show && <span>)</span>}</div>
      </div>
    );
  }
}

export default Goal;
