import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from '../containers/LoginScreen';
import SignupScreen from '../containers/SignupScreen';

let RootStack = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen
},{
  headerMode:'none',
});


export { RootStack };
