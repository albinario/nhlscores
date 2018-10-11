import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: "today"
        }
        this.increaseDate = this.increaseDate.bind(this);
        this.decreaseDate = this.decreaseDate.bind(this);
      }

    increaseDate() {
        this.setState({date: "tomorrow"});
        this.props.onDateChange(this.state.date);
    }

    decreaseDate() {
        this.setState({date: "yesterday"});
        this.props.onDateChange(this.state.date);
    }

    render() {
        return (
            <div className="d-flex justify-content-between">
                <i 
                className="fas fa-caret-left fa-4x"
                onClick={this.decreaseDate}
                ></i>       
                <h1>{this.state.date}</h1>
                <i 
                className="fas fa-caret-right fa-4x"
                onClick={this.increaseDate}
                ></i>
            </div>
        )

    }

}
        
    

export default Header;