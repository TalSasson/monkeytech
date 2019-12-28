import types from './types'

const setCurrentPage = (value) => ({
  type: types.setCurrentPage,
  value,
})

const setChosenCityDetails = (value) => ({
  type: types.setChosenCityDetails,
  value,
})

const setCity = (value) => ({
  type: types.setCity,
  value,
})

const setCityDetails = (key, value) => ({
  type: types.setCityDetails,
  key,
  value,
})

export {
  setCurrentPage,
  setChosenCityDetails,
  setCity,
  setCityDetails,
}
