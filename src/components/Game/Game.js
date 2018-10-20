import React, { Component } from 'react';
import './Game.css';
import GamesFeed from '../../util/GamesFeed';
import Logos from '../../util/Logos';
import GoalList from '../GoalList/GoalList';
import GoalieStatsList from '../GoalieStatsList/GoalieStatsList';
import Team from '../Team/Team';
import PlayerStats from '../PlayerStats/PlayerStats';
const Collapse = require('react-bootstrap/lib/Collapse');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: this.props.gameId,
      showGoals: false,
      goals: [],
      homeGoalies: [],
      awayGoalies: [],
      showPlayerStats: false
    }
  }

  componentDidMount() {
    //console.log("Game: componentDidMount()");
    GamesFeed.getPeriods(this.state.gameId).then(periods => {
      return periods.map(period => {
        return period.scoringPlays.map(goal => {
          return this.state.goals.push(goal);
        })
      })
    })
    GamesFeed.getGoalies(this.state.gameId).then(goalies => {
      this.setState({
        homeGoalies: goalies.homeGoalies,
        awayGoalies: goalies.awayGoalies
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    //console.log("Game: componentWillReceiveProps()");
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
    GamesFeed.getGoalies(nextProps.gameId).then(goalies => {
      this.setState({
        homeGoalies: goalies.homeGoalies,
        awayGoalies: goalies.awayGoalies
      })
    })
  }

  render() {
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

            <GoalList
              goals={this.state.goals}
              homeTeamId={this.props.homeTeamId}
              homeScore={this.props.homeScore}
              awayTeamId={this.props.awayTeamId}
              awayScore={this.props.awayScore}
            />
            <br/>
            <GoalieStatsList goalies={this.state.awayGoalies} teamId={this.props.awayTeamId} />
            <GoalieStatsList goalies={this.state.homeGoalies} teamId={this.props.homeTeamId} />

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
