import types from './types'

const setCurrentPage = (value) => ({
  type: types.setCurrentPage,
  value,
})

const setCity = (value) => ({
  type: types.setCity,
  value,
})

const setFavoriteCities = (value) => ({
  type: types.setFavoriteCities,
  value,
})

const removeFavoriteCity = (value) => ({
  type: types.removeFavoriteCity,
  value,
})

const setCityDetails = (key, value) => ({
  type: types.setCityDetails,
  key,
  value,
})

export {
  setCurrentPage,
  setCity,
  setCityDetails,
  setFavoriteCities,
  removeFavoriteCity,
}
