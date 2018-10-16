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
       this.decreaseDate();
    }

    setDate() {
        var newDate = moment(new Date()).add(this.state.day, 'days').format('YYYYMMDD');
        this.setState({date: newDate});
        this.props.onDateChange(this.state.date);
        this.getTitle();
    }
    
    async increaseDate() {
        await this.setState({day: this.state.day + 1})
        this.setDate();
    }

    async decreaseDate() {
        await this.setState({day: this.state.day - 1})
        this.setDate();
    }

    getTitle() {
        const today = moment(new Date).format('YYYYMMDD');
        const tomorrow = moment(new Date).add(1, 'days').format('YYYYMMDD');
        const yesterday = moment(new Date).subtract(1, 'days').format('YYYYMMDD');
        const currentDate = this.state.date;
        if(today === currentDate) {
            return "Today";
        }
        else if(tomorrow === currentDate) {
            return "Tomorrow";
        }
        else if(yesterday === currentDate) {
            return "Yesterday";
        }
        else {
            const beautifyOtherDays = moment(currentDate).format('MMMM Do YYYY');;
            return beautifyOtherDays;
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