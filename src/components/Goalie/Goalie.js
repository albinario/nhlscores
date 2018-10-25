import React, { Component } from 'react';
import Logos from '../../util/Logos';

class Goalie extends Component {
  render() {
    console.log("Goalie: render()");
    let result = "";
    if (this.props.goalie.playerStats[0].goaltending.wins) {
      result = "W";
    } else if (this.props.goalie.playerStats[0].goaltending.losses) {
      result = "L";
    } else if (this.props.goalie.playerStats[0].goaltending.overtimeLosses) {
      result = "OTL";
    } else {
      result = "-";
    }
    let penaltyMinutes = "";
    if (this.props.goalie.playerStats[0].penalties.penaltyMinutes) {
      penaltyMinutes = ` – ${this.props.goalie.playerStats[0].penalties.penaltyMinutes} PIM`;
    }
    return (
      <div className="row">
        <div className="col-xs-1"></div>
        <div className="col-xs-10 col-sm-4">
          <img src={Logos[this.props.teamId]} className="img-goal" alt="" />
          <span className="hidden-xs"> {this.props.goalie.player.firstName}</span> {this.props.goalie.player.lastName} ({result})
          <span className="pull-right">{this.props.goalie.playerStats[0].goaltending.saves} / {this.props.goalie.playerStats[0].goaltending.shotsAgainst} SA{penaltyMinutes}</span>
        </div>
      </div>
    );
  }
}

export default Goalie;
