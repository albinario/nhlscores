import React, { Component } from 'react';
import Logos from '../../util/Logos';
import Skater from '../Skater/Skater';

class SkaterList extends Component {
  render() {
    console.log("SkaterList: render()");
    return (
      <div className="">
        <div className="row">
          <div className="col-xs-1"></div>
          <div className="col-xs-4 col-sm-3">
            <img src={Logos[this.props.teamId]} className="img-goal" alt="" />
          </div>
          <div className="col-xs-1 text-center"><strong>G</strong></div>
          <div className="col-xs-1 text-center"><strong>A</strong></div>
          <div className="col-xs-1 text-center"><strong>+/-</strong></div>
          <div className="col-xs-1 text-center"><strong>S</strong></div>
          <div className="col-xs-1 text-center"><strong>PM</strong></div>
          <div className="hidden-xs col-sm-1 text-center"><strong>H</strong></div>
          <div className="hidden-xs col-sm-1 text-center"><strong>B</strong></div>
        </div>
      {
        this.props.skaters.map(skaters => {
          skaters.sort((a, b) => {return a.player.jerseyNumber - b.player.jerseyNumber});
          return skaters.map((skater, index) => {
            return (
              <Skater
                key={index}
                skater={skater}
              />
            )
          })
        })
      }
      </div>
    );
  }
}

export default SkaterList;
