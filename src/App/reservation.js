import React from 'react'
import './reservation.css'

const Reservation = ({name, date, time, guests}) =>{

  return (
    <div className="reservation">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {guests}</p>
      <button className="cancel-btn"> Cancle </button>
    </div>
  )
}

export default Reservation
