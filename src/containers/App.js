import React, { Component } from 'react';
import {  SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { Provider, connect } from 'react-redux';
import { RootStack } from '../navigators';

import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import createStore from '../reducers';
const store = createStore();

const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

let AppNavigation = createAppContainer(RootStack);

const Drop = createReduxContainer(AppNavigation);

const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(Drop);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView forceInset={{ bottom: 'never' }} style={{flex: 1, backgroundColor: '#fff'}}>
          <AppWithNavigationState />
        </SafeAreaView>
      </Provider>
    );
  }
}
