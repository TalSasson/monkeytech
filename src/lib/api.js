import { TOKEN, FAST_RIDER_URL } from '../consts'
import store from '../store'

async function fetchRidesDetails() {
  const response = await fetch(`${FAST_RIDER_URL}/rides?token=${TOKEN}`)
  const rides = await response.json()
  return rides
}

async function requestAccessCode() {
  const response = await fetch(`${FAST_RIDER_URL}/tickets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
      pin: store.getState().pinCode,
      ride_id: store.getState().selectedRideId,
      token: TOKEN,
    },
  })
  const rides = await response.json()
  return rides
}

export {
  fetchRidesDetails,
  requestAccessCode,
}
