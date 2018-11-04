import React, { Component } from 'react';
import Logos from '../../util/Logos';
import TeamsFeed from '../../util/TeamsFeed';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: []
    }
    TeamsFeed.getTeamRecord(this.props.teamId).then(record => {
      this.setState({
        record: [record.wins, record.losses, record.overtimeLosses]
      })
    })
  }

  render() {
    console.log("Team: render() " + this.props.name);
    return (
      <p>
        <img src={Logos[this.props.teamId]} alt="" /><span className="hidden-xs">{this.props.city} </span>{this.props.name} ({this.state.record.join('-')})
          {this.props.playedStatus &&
            <span className="pull-right"><strong>{this.props.scoreTotal}</strong> {this.props.periods.join(' ')}</span>
          }
      </p>
    );
  }
}

export default Team;
