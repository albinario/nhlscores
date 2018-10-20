import React, { Component } from 'react';
import Goal from '../Goal/Goal';

class GoalList extends Component {
  render() {
    //console.log("render GoalList " + this.props.gameId);
    let homeScore = 0;
    let awayScore = 0;
    return (
      this.props.goals.map((goal, index) => {
        if (goal.team.id === this.props.homeTeamId && homeScore < this.props.homeScore) {
          homeScore++;
        } else if (awayScore < this.props.awayScore) {
          awayScore++;
        }
        const playDesc = goal.playDescription.replace("Goal scored by", "").replace("(Empty Net)", "").replace(", assisted by ", " (").replace(" and", ",").replace(".", "").replace("(unassisted)", "(unassisted").replace("Shootout attempt by ", "(PS: ").replace(", scored!", "")+")";
        return (
          <Goal
            key={index}
            scoringTeamId={goal.team.id}
            homeTeamId={this.props.homeTeamId}
            homeScore={homeScore}
            awayTeamId={this.props.awayTeamId}
            awayScore={awayScore}
            playDesc={playDesc}
          />
        )
      })
    )
  }
}

  export default GoalList;
