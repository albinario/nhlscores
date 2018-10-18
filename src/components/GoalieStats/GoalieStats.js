import React, { Component } from 'react';
import './GoalieStats.css';
import Logos from '../../util/Logos';

class GoalieStats extends Component {

  render() {
    return (
      <div className="">
        <img src={Logos[this.props.teamId]} className="img-goalie" alt="" />
        {this.props.firstName} {this.props.lastName}
      </div>
    );
  }
}

export default GoalieStats;
