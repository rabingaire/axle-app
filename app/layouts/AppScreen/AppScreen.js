import React , { Component } from 'react';
import { StackNavigator } from 'react-navigation';


import PathSelection from './../../routes/pathSelection/pathSelection.js';
import Login from './../../routes/register/login.js';
import ChangePassword from './../../routes/register/changePassword.js';
import SignUp from './../../routes/register/signUp.js';
import PickUpLocation from './../../routes/PickUpLocation/PickUpLocation';


  const routeConfiguration = {
    PickUpLocation: { screen: PickUpLocation },
    PathSelection: { screen: PathSelection },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ChangePassword: { screen: ChangePassword },
  }

// going to disable the header for now
  const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'PickUpLocation'
  }

  export const AppScreen = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
