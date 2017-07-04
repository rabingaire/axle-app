import React, { Component } from 'react';
import { Text, View } from 'react-native';

import LocationBlock from './../../layouts/common/LocationBlock/LocationBlock';

export default class PickUpLocation extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return (
      <View>
        <LocationBlock>
          <Text>Hello</Text>
        </LocationBlock>
      </View>
    )
  }
};
