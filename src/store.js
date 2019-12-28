import { createStore, compose } from 'redux'

import reducer from './reducer/reducer'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers()

const store = createStore(reducer, enhancer)

export default store
