import React, { Component } from 'react';
import Goal from '../Goal/Goal';

class GoalList extends Component {
  render() {
    console.log("GoalList: render() for Game: " + this.props.gameId);
    let homeScore = 0;
    let awayScore = 0;
    let periodFigure = '';
    let gwg = false;
    return (
      this.props.periods.map(period => {
        switch (period.periodNumber) {
          case 1:
            periodFigure = 'P1';
            break;
          case 2:
            periodFigure = 'P2';
            break;
          case 3:
            periodFigure = 'P3';
            break;
          case 4:
            periodFigure = 'OT';
            break;
          case 5:
            periodFigure = 'PS';
            break;
          default:
            periodFigure = '';
            break;
        };
        return period.scoringPlays.map((scoringPlay, index) => {
          if (scoringPlay.team.id === this.props.homeTeamId && homeScore < this.props.homeScoreTotal) {
            homeScore++;
          } else if (awayScore < this.props.awayScoreTotal) {
            awayScore++;
          }
          if ((homeScore === this.props.awayScoreTotal + 1 || awayScore === this.props.homeScoreTotal + 1) && !gwg) {
            gwg = true;
          } else {
            gwg = false;
          }
          return (
            <Goal
              key={index}
              periodFigure={periodFigure}
              scoringPlay={scoringPlay}
              homeScore={homeScore}
              awayScore={awayScore}
              gwg={gwg}
            />
          )
        })
      })
    )
  }
}

  export default GoalList;
