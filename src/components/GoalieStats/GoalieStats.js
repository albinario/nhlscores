import React, { Component } from 'react';
import Logos from '../../util/Logos';

class GoalieStats extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-1"></div>
        <div className="col-xs-10"><img src={Logos[this.props.teamId]} className="img-goal" alt="" /> {this.props.firstName} {this.props.lastName} ({this.props.result}) – {this.props.saves} saves / {this.props.shotsAgainst} shots – {this.props.savePercentage}%
        </div>
      </div>
    );
  }
}

export default GoalieStats;
