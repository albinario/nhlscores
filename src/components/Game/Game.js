import React, { Component } from 'react';
import './Game.css';
import Team from '../Team/Team';
import GoalList from '../GoalList/GoalList';
import GoalieStatsList from '../GoalieStatsList/GoalieStatsList';
import PlayerStatsList from '../PlayerStatsList/PlayerStatsList';
const Collapse = require('react-bootstrap/lib/Collapse');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandFirst: false,
      expandSecond: false
    }
  }

  render() {
    console.log("Game: render() " + this.props.homeTeamName + this.props.awayTeamName);
    let chevronFirst = "glyphicon glyphicon-chevron-down";
    let chevronSecond = "glyphicon glyphicon-chevron-down";
    if (this.state.expandFirst) {chevronFirst = "glyphicon glyphicon-chevron-up";}
    if (this.state.expandSecond) {chevronSecond = "glyphicon glyphicon-chevron-up";}
    return (
      <div className="well well-sm">
        <div onClick={() => (this.setState({expandFirst: !this.state.expandFirst}))}>
          <Team
            teamId={this.props.awayTeamId}
            city={this.props.awayTeamCity}
            name={this.props.awayTeamName}
            record={this.props.awayRecord}
            scoreTotal={this.props.awayScoreTotal}
            periods={this.props.awayPeriods}
          />
          <Team
            teamId={this.props.homeTeamId}
            city={this.props.homeTeamCity}
            name={this.props.homeTeamName}
            record={this.props.homeRecord}
            scoreTotal={this.props.homeScoreTotal}
            periods={this.props.homePeriods}
          />
          <p className="text-center small"><span className={chevronFirst}></span></p>
        </div>
        <Collapse in={this.state.expandFirst} onClick={() => (this.setState({expandSecond: !this.state.expandSecond}))}>
          <div>
            <GoalList
              gameId={this.props.gameId}
              goals={this.props.goals}
              homeTeamId={this.props.homeTeamId}
              homeScoreTotal={this.props.homeScoreTotal}
              awayTeamId={this.props.awayTeamId}
              awayScoreTotal={this.props.awayScoreTotal}
            />
            <br/>
            <GoalieStatsList
              goalies={this.props.awayGoalies}
              teamId={this.props.awayTeamId}
            />
            <GoalieStatsList
              goalies={this.props.homeGoalies}
              teamId={this.props.homeTeamId}
            />
            <p className="text-center small"><span className={chevronSecond}></span></p>
            <Collapse in={this.state.expandSecond}>
              <div>
                <PlayerStatsList />
              </div>
            </Collapse>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Game;
