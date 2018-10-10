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
  }

  componentWillMount() {
    GamesFeed.getGames().then(games => {
      this.setState({games: games})
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <GameList games={this.state.games} />
      </div>
    );
  }
}

export default App;
