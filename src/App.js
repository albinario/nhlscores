import React, { Component } from 'react';
import GamesFeed from './util/GamesFeed';
import GameList from './components/GameList/GameList';
import Header from './components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
    this.onDateChange = this.onDateChange.bind(this);
  }

  componentWillMount() {   
    GamesFeed.getGames('20181008').then(games => {
      this.setState({games: games})
    });  
  }

  onDateChange(dateFromHeader) {
    GamesFeed.getGames(dateFromHeader).then(games => {
      this.setState({games: games})
    });
  }

  render() {
    return (
      <div className="container">
        <Header onDateChange={this.onDateChange}/>
        <GameList games={this.state.games} />
      </div>
    );
  }
}

export default App;
