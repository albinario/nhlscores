import React, { Component } from 'react';

class Goal extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-1 text-center">{this.props.homeScore}-{this.props.awayScore}</div>
        <div className="col-xs-10">{this.props.playDesc}</div>
      </div>
    );
  }
}

export default Goal;
