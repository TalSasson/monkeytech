import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import types from '../actions/types'

const initialState = Immutable({
    currentPage: 'home',
    cityName: '',
    cityDetails: {},
    chosenCityDetails: {
        name: 'Tel aviv',
        degree: 18,
        text: 'Rainy',
        dailyForecasts: [
            {
                date: new Date(),
                degree: 10,
                text: 'Rainy'
            },
            {
                date: new Date(),
                degree: 10,
                text: 'Sunny'
            },
            {
                date: new Date(),
                degree: 10,
                text: 'Sunny'
            },
            {
                date: new Date(),
                degree: 10,
                text: 'Sunny'
            },
            {
                date: new Date(),
                degree: 10,
                text: 'Sunny'
            }
        ]
    }
})

export default handleActions({
  [types.setCurrentPage]: (state, { value }) => state.setIn(['currentPage'], value),
  [types.setCityName]: (state, { value }) => state.setIn(['cityName'], value),
  [types.setCityDetails]: (state, { value }) => state.setIn(['cityDetails'], value),
  [types.setChosenCityDetails]: (state, { value }) => state.setIn(['chosenCityDetails'], value),
}, initialState)
