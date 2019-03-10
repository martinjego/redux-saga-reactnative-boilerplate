import { AsyncStorage, Alert } from 'react-native'
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['email','password'],
  loginSuccess: ['user'],
  loginFailure: ['user'],
  userLogout: [],
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  fetching: false,
}

export const userLogout = (state) => {
  return state.merge({ fetching: false, payload: null })
}

// request the data from an api
export const loginRequest = (state, { email, password }) => {
  return state.merge({ fetching: true })
}

// successful api lookup
export const loginSuccess = (state, action) => {
  return state.merge({ fetching: false })
}

export const loginFailure = (state, action) => {
  return state.merge({ fetching: false })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.USER_LOGOUT]: userLogout,
})
