import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import types from '../actions/types'

const initialState = Immutable({
  pinCode: '',
  selectedRideId: '',
  bookedTicketDetails: {
    ride: {
      zone: {
        name: 'Gibbon Islans',
        color: 'rgb(231, 111, 104)',
      },
      name: 'Rings of Black',
      remaining_tickets: 0,
      return_time: '2020-02-05T08:34:45.855Z',
    },
    access_code: '134A-7155-9CB1',
    return_time: '2020-02-05T08:34:45.855Z',
  },
})

export default handleActions({
  [types.setPinCode]: (state, { value }) => state.set(['pinCode'], value),
  [types.setSelectedRideId]: (state, { value }) => state.set(['selectedRideId'], value),
  [types.setBookedTicketDetails]: (state, { value }) => state.set(['bookedTicketDetails'], value),
}, initialState)
