import React, { Component } from 'react';
import './Game.css';
import GamesFeed from '../../util/GamesFeed';
import TeamsFeed from '../../util/TeamsFeed';
import Logos from '../../util/Logos';
import Goal from '../Goal/Goal';
import PlayerStats from '../PlayerStats/PlayerStats';
const Collapse = require('react-bootstrap/lib/Collapse');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: this.props.gameId,
      homeTeamId: this.props.homeTeamId,
      homeWins: 0,
      homeLosses: 0,
      homeOvertimeLosses: 0,
      awayTeamId: this.props.awayTeamId,
      awayWins: 0,
      awayLosses: 0,
      awayOvertimeLosses: 0,
      showGoals: false,
      goals: [],
      showPlayerStats: false
    }
  }

  componentWillMount() {
    GamesFeed.getPeriods(this.state.gameId).then(periods => {
      return periods.map(period => {
        return period.scoringPlays.map(goal => {
          return this.state.goals.push(goal);
        })
      })
    })
    TeamsFeed.getTeamStats(this.state.homeTeamId).then(stats => {
      this.setState({
        homeWins: stats.standings.wins + stats.standings.overtimeWins,
        homeLosses: stats.standings.losses,
        homeOvertimeLosses: stats.standings.overtimeLosses
      })
    })
    TeamsFeed.getTeamStats(this.state.awayTeamId).then(stats => {
      this.setState({
        awayWins: stats.standings.wins + stats.standings.overtimeWins,
        awayLosses: stats.standings.losses,
        awayOvertimeLosses: stats.standings.overtimeLosses
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameId !== this.state.gameId) {
      this.setState({goals: []})
    }
    GamesFeed.getPeriods(nextProps.gameId).then(periods => {
      return periods.map(period => {
        return period.scoringPlays.map(goal => {
          return this.state.goals.push(goal);
        })
      })
    })
    TeamsFeed.getTeamStats(nextProps.homeTeamId).then(stats => {
      this.setState({
        homeWins: stats.standings.wins + stats.standings.overtimeWins,
        homeLosses: stats.standings.losses,
        homeOvertimeLosses: stats.standings.overtimeLosses
      })
    })
    TeamsFeed.getTeamStats(nextProps.awayTeamId).then(stats => {
      this.setState({
        awayWins: stats.standings.wins + stats.standings.overtimeWins,
        awayLosses: stats.standings.losses,
        awayOvertimeLosses: stats.standings.overtimeLosses
      })
    })
  }

  render() {
    let homeScore = 0;
    let awayScore = 0;
    let chevronGoals = "glyphicon glyphicon-chevron-down";
    let chevronPlayerStats = "glyphicon glyphicon-chevron-down";
    if (this.state.showGoals) {chevronGoals = "glyphicon glyphicon-chevron-up";}
    if (this.state.showPlayerStats) {chevronPlayerStats = "glyphicon glyphicon-chevron-up";}
    return (
      <div className="well well-sm">
        <div onClick={() => this.setState({showGoals: !this.state.showGoals})}>
          <p><img src={Logos[this.props.awayTeamId]} alt="" /><span className="hidden-xs">{this.props.awayTeamCity} </span>{this.props.awayTeamName} ({this.state.awayWins}-{this.state.awayLosses}-{this.state.awayOvertimeLosses})
            <span className="pull-right"><strong>{this.props.awayScore}</strong> {this.props.awayPeriods.map((period, index) => { return <span key={index}> {period} </span>})} </span></p>
          <p><img src={Logos[this.props.homeTeamId]} alt="" /><span className="hidden-xs">{this.props.homeTeamCity} </span>{this.props.homeTeamName} ({this.state.homeWins}-{this.state.homeLosses}-{this.state.homeOvertimeLosses})
            <span className="pull-right"><strong>{this.props.homeScore}</strong> {this.props.homePeriods.map((period, index) => { return <span key={index}> {period} </span>})} </span></p>
          <p className="text-center small"><span className={chevronGoals}></span></p>
        </div>
        <Collapse in={this.state.showGoals} onClick={() => this.setState({showPlayerStats: !this.state.showPlayerStats})}>
          <div>
            {
              this.state.goals.map((goal, index) => {
                if (goal.team.id === this.props.homeTeamId && homeScore < this.props.homeScore) {
                  homeScore++;
                } else if (awayScore < this.props.awayScore) {
                  awayScore++;
                }
                const playDesc = goal.playDescription.replace("Goal scored by", "").replace("(Empty Net)", "").replace("Shootout attempt by ", "(PS: ").replace(", scored!", ")");
                return (
                  <Goal
                    key={index}
                    scoringTeamId={goal.team.id}
                    homeScore={homeScore}
                    awayScore={awayScore}
                    playDesc={playDesc}
                  />
                );
              })
            }
            <p className="text-center small"><span className={chevronPlayerStats}></span></p>
            <Collapse in={this.state.showPlayerStats}>
              <div>
                <PlayerStats />
              </div>
            </Collapse>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Game;
