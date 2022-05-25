const apiCalls = {
  getReservations() {
    return fetch('http://localhost:3001/api/v1/reservations').then(res => res.json())
  },

  addReservation(event, state){
    event.preventDefault()
    const bodyContents = JSON.stringify({
      name: state.name,
      date: state.date,
      time: state.time,
      number: state.number,
    })

    return fetch('http://localhost:3001/api/v1/reservations', {
      method: "POST",
      body: bodyContents,
      headers: {
  	     'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(window.location.reload(true))
  }
}

export default {apiCalls}
