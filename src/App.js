import React, { Component } from 'react';
import MainFeed from './util/MainFeed';
import Header from './components/Header/Header';
import GameList from './components/GameList/GameList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
    this.onDateChange = this.onDateChange.bind(this);
    MainFeed.getGames('yesterday').then(games => {
      this.setState({games: games})
    });
  }

  onDateChange(dateFromHeader) {
    MainFeed.getGames(dateFromHeader).then(games => {
      this.setState({games: games})
    });
  }

  render() {
    console.log("App: render()");
    return (
      <div className="container">
        <Header onDateChange={this.onDateChange} />
        <GameList games={this.state.games} />
      </div>
    );
  }
}

export default App;
