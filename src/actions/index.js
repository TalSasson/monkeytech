import types from './types'

const setCurrentPage = value => ({
  type: types.setCurrentPage,
  value,
})

const setChosenCityDetails = value => ({
  type: types.setChosenCityDetails,
  value,
})

const setCityName = value => ({
  type: types.setCityName,
  value,
})

const setCityDetails = value => ({
  type: types.setCityDetails,
  value,
})

export {
  setCurrentPage,
  setChosenCityDetails,
  setCityName,
  setCityDetails,
}