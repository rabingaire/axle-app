import React ,{Component} from 'react';
import { AppScreen } from './layouts/AppScreen/AppScreen.js';

export default class AppRoute extends Component {
    constructor(props){
      super(props);

    }

    render(){
      return <AppScreen />;
    }
}
