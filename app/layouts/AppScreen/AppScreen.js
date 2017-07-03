import React , { Component } from 'react';
import { StackNavigator } from 'react-navigation';


import PathSelection from './../../routes/pathSelection/pathSelection.js';
import Login from './../../routes/register/login.js';
import ChangePassword from './../../routes/register/changePassword.js';
import SignUp from './../../routes/register/signUp.js';


  const routeConfiguration = {
    PathSelection: { screen: PathSelection },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ChangePassword: { screen: ChangePassword },

  }

// going to disable the header for now
  const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'PathSelection'
  }

  export const AppScreen = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
