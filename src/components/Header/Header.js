import React, { Component } from 'react';
import moment from 'moment';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      day: -1
    }
    this.increaseDate = this.increaseDate.bind(this);
    this.decreaseDate = this.decreaseDate.bind(this);
    this.setDate = this.setDate.bind(this);
    this.getTitle = this.getTitle.bind(this);
  }

  componentDidMount() {
    //console.log("Header: componentDidMount");
    let newDate = moment().subtract(1, 'days').format('YYYYMMDD');
    this.setState({
      date: newDate
    })
  }

  setDate() {
    //console.log("Header: setDate()");
    let newDate = moment(new Date()).add(this.state.day, 'days').format('YYYYMMDD');
    this.setState({date: newDate});
    this.props.onDateChange(this.state.date);
    this.getTitle();
  }

  async increaseDate() {
    //console.log("Header: increaseDate()");
    await this.setState({day: this.state.day + 1})
    this.setDate();
  }

  async decreaseDate() {
    //console.log("Header: decreaseDate()");
    await this.setState({day: this.state.day - 1})
    this.setDate();
  }

  getTitle() {
    //console.log("Header: getTitle()");
    const today = moment(new Date()).format('YYYYMMDD');
    const tomorrow = moment(new Date()).add(1, 'days').format('YYYYMMDD');
    const yesterday = moment(new Date()).subtract(1, 'days').format('YYYYMMDD');
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
    //console.log("Header: render()");
    const title = this.getTitle();
    return (
      <div className="row header">
        <div className="col-xs-1"><span className="glyphicon glyphicon-chevron-left" onClick={this.decreaseDate}></span></div>
        <div className="col-xs-9 col-sm-10"><h2 className="text-center">{title}</h2></div>
        <div className="col-xs-1"><span className="glyphicon glyphicon-chevron-right pull-right" onClick={this.increaseDate}></span></div>
      </div>
    )
  }
}

export default Header;
