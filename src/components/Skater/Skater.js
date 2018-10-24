import React, { Component } from 'react';

class Skater extends Component {
  render() {
    console.log("Skater: render()");
    return (
      <div className="row">
        <div className="col-xs-1 text-right">{this.props.skater.player.jerseyNumber}</div>
        <div className="col-xs-4 col-sm-6">
          <span className="hidden-xs">{this.props.skater.player.firstName} </span>{this.props.skater.player.lastName}
        </div>
        <div className="col-xs-1 text-center">{this.props.skater.playerStats[0].scoring.goals}</div>
        <div className="col-xs-1 text-center">{this.props.skater.playerStats[0].scoring.assists}</div>
        <div className="col-xs-1 text-center">{this.props.skater.playerStats[0].skating.plusMinus}</div>
        <div className="col-xs-1 text-center">{this.props.skater.playerStats[0].skating.shots}</div>
        <div className="col-xs-1 text-center">{this.props.skater.playerStats[0].penalties.penaltyMinutes}</div>
      </div>
    );
  }
}

export default Skater;
