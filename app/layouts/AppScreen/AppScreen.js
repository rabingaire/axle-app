import React , { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './../../routes/login/login.js';
import PathSelection from './../../routes/pathSelection/pathSelection.js';


  const routeConfiguration = {
    PathSelection: { screen: PathSelection },
    Login: { screen: Login },
  }

// going to disable the header for now
  const stackNavigatorConfiguration = {
    headerMode: 'float',
    initialRouteName: 'PathSelection'
  }

  export const AppScreen = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
