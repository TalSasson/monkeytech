import types from './types'
import store from '../store'

const setCity = (value) => ({
  type: types.setCity,
  value,
})

const setFavoriteCities = (value) => {
  const { favoriteCities } = store.getState()
  const newFavList = [...favoriteCities, value]
  localStorage.setItem('favorites', JSON.stringify(newFavList))
  return ({
    type: types.updateFavorites,
    favorites: newFavList,
  })
}

const removeFavoriteCity = (value) => {
  const { favoriteCities } = store.getState()
  const newFavList = favoriteCities.filter((city) => city.key !== value)
  localStorage.setItem('favorites', JSON.stringify(newFavList))
  return ({
    type: types.updateFavorites,
    favorites: newFavList,
  })
}

const setCityDetails = (key, value) => ({
  type: types.setCityDetails,
  key,
  value,
})

export {
  setCity,
  setCityDetails,
  setFavoriteCities,
  removeFavoriteCity,
}
