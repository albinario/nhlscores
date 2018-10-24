import React, { Component } from 'react';
import Goalie from '../Goalie/Goalie';

class GoalieList extends Component {
  render() {
    console.log("GoalieList: render()");
    return (
      <div className="">
      {
        this.props.goalies.map(goalies => {
          return goalies.map((goalie, index) => {
            return (
              <Goalie
                key={index}
                goalie={goalie}
                teamId={this.props.teamId}
              />
            )
          })
        })
      }
      </div>
    );
  }
}

export default GoalieList;
