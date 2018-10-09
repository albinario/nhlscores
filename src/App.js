import React, { Component } from 'react';
import GamesFeed from './util/GamesFeed';
import GameList from './components/GameList/GameList';

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
        {/* header will go here */}
        <GameList games={this.state.games} />
      </div>
    );
  }
}

export default App;
