import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import types from '../actions/types'
import { DEFAULT_LOCATION } from '../consts'

const favoritesCity = localStorage.getItem('favorites')

const initialState = Immutable({
  currentPage: 'home',
  city: DEFAULT_LOCATION || {},
  cityDetails: {
    currWeatherInfo: {},
    forecast: [],
  },
  favoriteCities: JSON.parse(favoritesCity) || [],
})

export default handleActions({
  [types.setCurrentPage]: (state, { value }) => state.setIn(['currentPage'], value),
  [types.setCity]: (state, { value }) => state.setIn(['city'], value),
  [types.setCityDetails]: (state, { key, value }) => state.setIn(['cityDetails', key], value),
  [types.updateFavorites]: (state, { favorites }) => state.set('favoriteCities', favorites),
  [types.resetCityDetails]: (state, { value }) => state.set('cityDetails', value),
}, initialState)
