import React, { Component } from 'react';
import Logos from '../../util/Logos';

class GoalieStats extends Component {
  render() {
    console.log("GoalieStats: render()");
    let penaltyMinutes = "";
    if (this.props.penaltyMinutes) {
      penaltyMinutes = ` – ${this.props.penaltyMinutes} PIM`;
    }
    return (
      <div className="row">
        <div className="col-xs-1"></div>
        <div className="col-xs-10">
          <img src={Logos[this.props.teamId]} className="img-goal" alt="" />
          <span className="hidden-xs"> {this.props.firstName}</span> {this.props.lastName} ({this.props.result})
          <span className="pull-right">{this.props.saves} / {this.props.shotsAgainst} SA{penaltyMinutes}</span>
        </div>
      </div>
    );
  }
}

export default GoalieStats;
