import React, { Component } from 'react';


class Goal extends Component {

  render() {
    return (
      <div className="">
        {this.props.homeScore}-{this.props.awayScore} {this.props.playDesc}
      </div>
    );
  }
}

export default Goal;
