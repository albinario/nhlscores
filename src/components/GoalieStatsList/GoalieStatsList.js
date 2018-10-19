import React, { Component } from 'react';
import GoalieStats from '../GoalieStats/GoalieStats';

class GoalieStatsList extends Component {

  render() {
    console.log("render GoalieStatsList");
    return (
      <div className="">
        {
          this.props.awayGoalies.map((goalie, index) => {
            return (
              <GoalieStats
                key={index}
                teamId={this.props.awayTeamId}
                firstName={goalie.player.firstName}
                lastName={goalie.player.lastName}
              />
            )
          })
        }
        {
          this.props.homeGoalies.map((goalie, index) => {
            return (
              <GoalieStats
                key={index}
                teamId={this.props.homeTeamId}
                firstName={goalie.player.firstName}
                lastName={goalie.player.lastName}
              />
            )
          })
        }
      </div>
    );
  }
}

export default GoalieStatsList;
