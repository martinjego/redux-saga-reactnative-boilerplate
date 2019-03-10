import { combineReducers } from 'redux'
import configureStore from './createStore'
import rootSaga from '../sagas'

import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import { RootStack } from '../navigators';
const navReducer = createNavigationReducer(RootStack);

export default () => {
  const appReducer = combineReducers({
    nav: navReducer,
    login: require('./LoginRedux').reducer,
  })

  const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      const state = undefined
    }

    return appReducer(state, action)
  }

  return configureStore(rootReducer, rootSaga)
}
