import React, { Component } from 'react';
import TeamsFeed from '../../util/TeamsFeed';
import Logos from '../../util/Logos';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wins: 0,
      losses: 0,
      overtimeLosses: 0
    }
    this.getTeamStats = this.getTeamStats.bind(this);
  }

  getTeamStats(teamId) {
    TeamsFeed.getTeamStats(teamId).then(stats => {
      this.setState({
        wins: stats.standings.wins + stats.standings.overtimeWins,
        losses: stats.standings.losses,
        overtimeLosses: stats.standings.overtimeLosses
      })
    })
  }

  componentDidMount() {
    this.getTeamStats(this.props.teamId);
  }

  componentWillReceiveProps(nextProps) {
    this.getTeamStats(nextProps.teamId);
  }

  render() {
    //console.log("Team: render()");
    return (
      <p>
        <img src={Logos[this.props.teamId]} alt="" /><span className="hidden-xs">{this.props.city} </span>{this.props.name} ({this.state.wins}-{this.state.losses}-{this.state.overtimeLosses})
        <span className="pull-right"><strong>{this.props.score}</strong> {this.props.periods.join(' ')} </span>
      </p>
    );
  }
}

export default Team;
