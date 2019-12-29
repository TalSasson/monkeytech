import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import types from '../actions/types'
import { DEFAULT_CITY } from '../consts'

const favorites = localStorage.getItem('favorites')

const initialState = Immutable({
  currentPage: 'home',
  city: DEFAULT_CITY || {},
  cityDetails: {
    country: '',
    currWeatherInfo: {},
    forecast: [],
  },
  favoriteCities: JSON.parse(favorites) || [],
})

export default handleActions({
  [types.setCurrentPage]: (state, { value }) => state.setIn(['currentPage'], value),
  [types.setCity]: (state, { value }) => state.setIn(['city'], value),
  [types.setCityDetails]: (state, { key, value }) => state.setIn(['cityDetails', key], value),
  [types.setFavoriteCities]: (state, { value }) => state.updateIn(['favoriteCities'], (arr) => arr.concat(value)),
//   [types.removeFavoriteCity]: (state, { value }) => state.set('favoriteCities',
//     state.get('favoriteCities').filter((o) => o.get('key') !== value)),
}, initialState)
