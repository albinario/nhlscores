import React, { Component } from 'react';
import './Game.css';
import GamesFeed from '../../util/GamesFeed';
import Team from '../Team/Team';
import Goal from '../Goal/Goal';
import PlayerStats from '../PlayerStats/PlayerStats';
const Collapse = require('react-bootstrap/lib/Collapse');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: this.props.gameId,
      showGoals: false,
      goals: [],
      showPlayerStats: false
    }
  }

  componentDidMount() {
    console.log("Game: componentDidMount()");
    GamesFeed.getPeriods(this.state.gameId).then(periods => {
      return periods.map(period => {
        return period.scoringPlays.map(goal => {
          return this.state.goals.push(goal);
        })
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log("Game: componentWillReceiveProps()");
    if (nextProps.gameId !== this.state.gameId) {
      this.setState({
        goals: []
      })
    }
    GamesFeed.getPeriods(nextProps.gameId).then(periods => {
      return periods.map(period => {
        return period.scoringPlays.map(goal => {
          return this.state.goals.push(goal);
        })
      })
    })
  }

  render() {
    //console.log("Game: render()");
    let homeScore = 0;
    let awayScore = 0;
    let chevronGoals = "glyphicon glyphicon-chevron-down";
    let chevronPlayerStats = "glyphicon glyphicon-chevron-down";
    if (this.state.showGoals) {chevronGoals = "glyphicon glyphicon-chevron-up";}
    if (this.state.showPlayerStats) {chevronPlayerStats = "glyphicon glyphicon-chevron-up";}
    return (
      <div className="well well-sm">
        <div onClick={() => this.setState({showGoals: !this.state.showGoals})}>
          <Team
            teamId={this.props.awayTeamId}
            city={this.props.awayTeamCity}
            name={this.props.awayTeamName}
            score={this.props.awayScore}
            periods={this.props.awayPeriods}
          />
          <Team
            teamId={this.props.homeTeamId}
            city={this.props.homeTeamCity}
            name={this.props.homeTeamName}
            score={this.props.homeScore}
            periods={this.props.homePeriods}
          />
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
