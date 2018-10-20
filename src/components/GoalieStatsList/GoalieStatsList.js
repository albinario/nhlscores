import React, { Component } from 'react';
import GoalieStats from '../GoalieStats/GoalieStats';

class GoalieStatsList extends Component {
  render() {
    //console.log("GoalieStatsList: render()");
    return (
      <div className="">
        {
          this.props.goalies.map((goalie, index) => {
            let result = "";
            if (goalie.playerStats[0].goaltending.wins === 1) {
              result = "W";
            } else if (goalie.playerStats[0].goaltending.losses === 1) {
              result = "L";
            } else if (goalie.playerStats[0].goaltending.overtimeLosses === 1) {
              result = "OTL";
            } else {
              result = "-";
            }
            return (
              <GoalieStats
                key={index}
                teamId={this.props.teamId}
                firstName={goalie.player.firstName}
                lastName={goalie.player.lastName}
                result={result}
                saves={goalie.playerStats[0].goaltending.saves}
                shotsAgainst={goalie.playerStats[0].goaltending.shotsAgainst}
                penaltyMinutes={goalie.playerStats[0].penalties.penaltyMinutes}
              />
            )
          })
        }
      </div>
    );
  }
}

export default GoalieStatsList;
