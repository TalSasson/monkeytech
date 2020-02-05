import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import types from '../actions/types'

const initialState = Immutable({})

export default handleActions({}, initialState)
