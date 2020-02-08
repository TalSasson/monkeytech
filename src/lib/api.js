import ky from 'ky'
import { TOKEN, FAST_RIDER_URL } from '../consts'
import store from '../store'


async function fetchRidesDetails() {
  return ky.get(`${FAST_RIDER_URL}/rides?token=${TOKEN}`, {
    searchParams: {
      token: TOKEN,
    },
  }).json()
}

async function requestAccessCode() {
  return ky.post(`${FAST_RIDER_URL}/tickets`,
    {
      throwHttpErrors: false,
      json: {
        pin: store.getState().pinCode,
        ride_id: store.getState().selectedRideId,
        token: TOKEN,
      },
    }).json()
}

export {
  fetchRidesDetails,
  requestAccessCode,
}
