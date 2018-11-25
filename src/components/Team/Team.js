import React, { Component } from 'react';
import './Team.css';
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

  setRecord() {
    TeamsFeed.getTeamRecord(this.props.teamId).then(record => {
      this.setState({
        record: [record.wins, record.losses, record.overtimeLosses]
      })
    })
  }

  componentDidMount() {
    this.setRecord();
  }

  componentDidUpdate(prevProps) {
    if (this.props.teamId !== prevProps.teamId) {
      this.setRecord();
    }
  }

  render() {
    console.log("Team: render() " + this.props.name);
    let showExtra = false;
    if (this.props.extra && this.props.winningTeam === this.props.teamId) {
      showExtra = true;
    }
    const startTime = new Date(this.props.startTime);
    const hh = ('0' + startTime.getUTCHours()).slice(-2);
    const mm = ('0' + startTime.getUTCMinutes()).slice(-2);
    return (
      <p className="height">
        <img src={Logos[this.props.teamId]} alt="" /><span className="hidden-xs">{this.props.city} </span>{this.props.name} <span className="label label-default">{this.state.record.join('-')}</span>
          {this.props.playedStatus ?
            <span className="pull-right btn btn-default btn-sm">{showExtra && this.props.extra} <strong>{this.props.scoreTotal}</strong></span>
            :
            this.props.startTime &&
              <span className="pull-right btn btn-default btn-sm">{hh}:{mm}</span>
          }
      </p>
    );
  }
}

export default Team;
