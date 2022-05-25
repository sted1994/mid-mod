import React , {Component} from 'react';
import "./reservation-form.css"
import apiCalls from './api-calls'

class ReservationForm extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render(){
    return (
      <form className="reservation-form">
        <input onChange={(event) => this.setState({name: event.target.parentElement[0].value})} placeholder="Name"></input>
        <input onChange={(event) => this.setState({date: event.target.parentElement[1].value})} placeholder="Date (mm/dd)"></input>
        <input onChange={(event) => this.setState({time: event.target.parentElement[2].value})} placeholder="Time"></input>
        <input onChange={(event) => this.setState({number: event.target.parentElement[3].value})} placeholder="Number Of guests"></input>
        <button onClick={(event) => apiCalls.apiCalls.addReservation(event, this.state)} className="submit-reservation-btn">Make Reservation</button>
      </form>
    )
  }

}

export default ReservationForm
