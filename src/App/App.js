import React, { Component } from 'react';
import './App.css';
import apiCalls from './api-calls'
import Reservation from './reservation'
import ReservationContainer from './reservation-container'
import ReservationForm from "./reservation-form"

class App extends Component {
  constructor(){
    super();
    this.state = {
      reservations: [],
    }
  }

  test = () => {
    console.log(this.state)
  }

  componentDidMount = () => {
    apiCalls.apiCalls.getReservations()
    .then(data => this.setState({reservations: data}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
          <ReservationForm test={this.test}/>
          <ReservationContainer reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
