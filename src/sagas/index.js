import { takeLatest, takeEvery, all } from 'redux-saga/effects'

import { LoginTypes } from '../reducers/LoginRedux'

//import API from '../config/api'

//const api = API.create()

export default function* root() {
  yield all ([
    //takeLatest(LoginTypes.LOGIN_REQUEST),
  ])
}
