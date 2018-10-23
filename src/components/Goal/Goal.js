import React, { Component } from 'react';
import './Goal.css';
import Logos from '../../util/Logos';

class Goal extends Component {
  render() {
    console.log("Goal: render()");
    const playDesc = this.props.goal.playDescription.replace("Goal scored by", "").replace("(Empty Net)", "").replace(", assisted by ", " (").replace(" and", ",").replace(/\./g, "").replace("(unassisted)", "(unassisted").replace("Shootout attempt by ", "(PS: ").replace(", scored!", "")+")";
    return (
      <div className="row">
        <div className="col-xs-1 text-center">{this.props.homeScore}-{this.props.awayScore}</div>
        <div className="col-xs-10"><img src={Logos[this.props.goal.team.id]} className="img-goal" alt="" /> {playDesc}</div>
      </div>
    );
  }
}

export default Goal;
