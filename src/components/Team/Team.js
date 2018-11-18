import React, { Component } from 'react';
import Logos from '../../util/Logos';
import TeamsFeed from '../../util/TeamsFeed';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: []
    }
    this.setRecord = this.setRecord.bind(this);
  }
  setRecord(teamId) {
    TeamsFeed.getTeamRecord(teamId).then(record => {
      this.setState({
        record: [record.wins, record.losses, record.overtimeLosses]
      })
    })
  }

  componentDidMount() {
    this.setRecord(this.props.teamId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.teamId !== prevProps.teamId) {
      this.setRecord(this.props.teamId);
    }
  }

  render() {
    console.log("Team: render() " + this.props.name);
    let show = false;
    let startTime = '';
    if (this.props.startTime) {
      show = true;
      startTime = this.props.startTime.replace('T', ' ').replace('Z', '').replace('.000', '');
    }
    return (
      <p>
        <img src={Logos[this.props.teamId]} alt="" /><span className="hidden-xs">{this.props.city} </span>{this.props.name} ({this.state.record.join('-')})
          {this.props.playedStatus ?
            <span className="pull-right"><strong>{this.props.scoreTotal}</strong> {this.props.periods.join(' ')}</span>
            :
            show &&
              <span className="pull-right">{startTime}</span>
          }
      </p>
    );
  }
}

export default Team;
