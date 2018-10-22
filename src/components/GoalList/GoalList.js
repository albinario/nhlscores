import React, { Component } from 'react';
import Goal from '../Goal/Goal';

class GoalList extends Component {
  render() {
    console.log("GoalList: render() for Game: " + this.props.gameId);
    let homeScore = 0;
    let awayScore = 0;
    return (
      this.props.goals.map((goal, index) => {
        if (goal.team.id === this.props.homeTeamId && homeScore < this.props.homeScoreTotal) {
          homeScore++;
        } else if (awayScore < this.props.awayScoreTotal) {
          awayScore++;
        }
        return (
          <Goal
            key={index}
            goal={goal}
            homeScore={homeScore}
            awayScore={awayScore}
          />
        )
      })
    )
  }
}

  export default GoalList;
