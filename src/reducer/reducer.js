import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import types from '../actions/types'
import { DEFAULT_CITY } from '../consts'

const initialState = Immutable({
  currentPage: 'home',
  city: DEFAULT_CITY || {},
  cityDetails: {
    currWeatherInfo: {},
    forecast: [],
  },
})

export default handleActions({
  [types.setCurrentPage]: (state, { value }) => state.setIn(['currentPage'], value),
  [types.setCity]: (state, { value }) => state.setIn(['city'], value),
  [types.setCityDetails]: (state, { key, value }) => state.setIn(['cityDetails', key], value),
  [types.setChosenCityDetails]: (state, { value }) => state.setIn(['chosenCityDetails'], value),
}, initialState)
