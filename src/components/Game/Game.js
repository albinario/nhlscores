import React, { Component } from 'react';

class Game extends Component {

  render() {
    return (
      <div className="card mb-2">
        <div className="card-header">Date Place</div>
        <div className="card-body">
          <p className="card-text">{this.props.awayTeam} {this.props.awayScore}</p>
          <p className="card-text">{this.props.homeTeam} {this.props.homeScore}</p>
        </div>
      </div>
    );
  }
}

export default Game;



// <div class="card border-dark mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body text-dark">
//     <h5 class="card-title">Dark card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
