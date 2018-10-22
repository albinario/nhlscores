import React, { Component } from 'react';
import Logos from '../../util/Logos';

class Team extends Component {
  render() {
    console.log("Team: render() " + this.props.name);
    return (
      <p>
        <img src={Logos[this.props.teamId]} alt="" /><span className="hidden-xs">{this.props.city} </span>{this.props.name} ({this.props.record.join('-')})
        <span className="pull-right"><strong>{this.props.scoreTotal}</strong> {this.props.periods.join(' ')} </span>
      </p>
    );
  }
}

export default Team;
