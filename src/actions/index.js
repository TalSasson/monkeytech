import types from './types'

const setPinCode = (value) => ({
  type: types.setPinCode,
  value,
})

const setSelectedRideId = (value) => ({
  type: types.setSelectedRideId,
  value,
})

const setBookedTicketDetails = (value) => ({
  type: types.setBookedTicketDetails,
  value,
})

export {
  setPinCode,
  setSelectedRideId,
  setBookedTicketDetails,
}
