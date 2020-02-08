import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import types from '../actions/types'
import { LOCAL_STORAGE_KEY } from '../consts'

const initialState = Immutable({
  pinCode: localStorage.getItem(LOCAL_STORAGE_KEY) || '',
  selectedRideId: '',
  bookedTicketDetails: {
    ride: {
      zone: {
        name: 'Gibbon Islans',
        color: '#e76f68',
      },
      name: 'Tropical Rush',
      remaining_tickets: 29,
      return_time: '2020-02-08T10:30:00.000+02:00',
    },
    access_code: '',
    return_time: '2020-02-08T10:30:00.000+02:00',
  },
})

export default handleActions({
  [types.setPinCode]: (state, { value }) => state.set(['pinCode'], value),
  [types.setSelectedRideId]: (state, { value }) => state.set(['selectedRideId'], value),
  [types.setBookedTicketDetails]: (state, { value }) => state.set(['bookedTicketDetails'], value),
}, initialState)
