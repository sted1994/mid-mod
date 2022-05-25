import React from 'react'
import "./reservation-container.css"
import Reservation from './reservation'

const ReservationContainer = ({reservations}) => {
  const reservationCards = reservations.map(res => {

    return <Reservation
              key= {res.id}
              name = {res.name}
              date = {res.date}
              time = {res.time}
              guests = {res.number}
              />
  })
  return (
    <div className="reservation-constiner">
      {reservationCards}
    </div>
  )
}

export default ReservationContainer
