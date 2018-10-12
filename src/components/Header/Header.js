import React, { Component } from 'react';
import moment from 'moment';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: null,
          day: 0
        }
        this.increaseDate = this.increaseDate.bind(this);
        this.decreaseDate = this.decreaseDate.bind(this);
        this.setDate = this.setDate.bind(this);
        this.getTitle = this.getTitle.bind(this);
      }

    componentWillMount() { 
       var newDate = moment().format('YYYYMMDD');
       this.setState({
           date: newDate
       })
    }

    setDate() {
        var newDate = moment(new Date()).add(this.state.day, 'days').format('YYYYMMDD');
        this.setState({date: newDate});
        this.props.onDateChange(this.state.date);
        this.getTitle();
    }
    
    increaseDate() {
        this.setState({day: this.state.day + 1})
        this.setDate();
    }

    decreaseDate() {
        this.setState({day: this.state.day - 1})
        this.setDate();
    }

    getTitle() {
        const today = moment(new Date).format('YYYYMMDD');
        if(today === this.state.date) {
            return "Today";
        }
        else {
            return this.state.date;
        }
        
    }

    render() {
        const title = this.getTitle();
        return (
            <div className="d-flex justify-content-between">
                <span className="glyphicon glyphicon-menu-left"
                onClick={this.decreaseDate}
                >left</span>       
                <h1>{title}</h1>
                <span 
                className="glyphicon glyphicon-menu-right"
                onClick={this.increaseDate}
                >right</span>
            </div>
        )

    }

}
        
export default Header;