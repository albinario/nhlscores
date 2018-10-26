import React, { Component } from 'react';
import './Game.css';
import Team from '../Team/Team';
import GoalList from '../GoalList/GoalList';
import GoalieList from '../GoalieList/GoalieList';
import SkaterList from '../SkaterList/SkaterList';
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
    console.log("Game: render() " + this.props.game.gameId);
    let chevronSecond = "glyphicon glyphicon-chevron-down";
    if (this.state.expandSecond) {chevronSecond = "glyphicon glyphicon-chevron-up";}
    return (
      <div className="well well-sm">
        <div onClick={() => (this.setState({expandFirst: !this.state.expandFirst}))}>
          <Team
            teamId={this.props.game.awayTeamId}
            city={this.props.game.awayTeamCity}
            name={this.props.game.awayTeamName}
            record={this.props.game.awayRecord}
            playedStatus={this.props.game.playedStatus}
            scoreTotal={this.props.game.awayScoreTotal}
            periods={this.props.game.awayPeriods}
          />
          <Team
            teamId={this.props.game.homeTeamId}
            city={this.props.game.homeTeamCity}
            name={this.props.game.homeTeamName}
            record={this.props.game.homeRecord}
            playedStatus={this.props.game.playedStatus}
            scoreTotal={this.props.game.homeScoreTotal}
            periods={this.props.game.homePeriods}
          />
        </div>
          {this.props.game.playedStatus &&
            <Collapse in={this.state.expandFirst} onClick={() => (this.setState({expandSecond: !this.state.expandSecond}))}>
              <div>
                <GoalList
                  gameId={this.props.game.gameId}
                  periods={this.props.game.periods}
                  homeTeamId={this.props.game.homeTeamId}
                  homeScoreTotal={this.props.game.homeScoreTotal}
                  awayTeamId={this.props.game.awayTeamId}
                  awayScoreTotal={this.props.game.awayScoreTotal}
                />
                <br/>
                <GoalieList
                  goalies={this.props.game.awayGoalies}
                  teamId={this.props.game.awayTeamId}
                />
                <GoalieList
                  goalies={this.props.game.homeGoalies}
                  teamId={this.props.game.homeTeamId}
                />
                <p className="text-center small">Skaters <span className={chevronSecond}></span></p>
                <Collapse in={this.state.expandSecond}>
                  <div>
                    <SkaterList
                      skaters={this.props.game.awaySkaters}
                      teamId={this.props.game.awayTeamId}
                    />
                    <br/>
                    <SkaterList
                      skaters={this.props.game.homeSkaters}
                      teamId={this.props.game.homeTeamId}
                    />
                  </div>
                </Collapse>
              </div>
            </Collapse>
          }
      </div>
    );
  }
}

export default Game;
