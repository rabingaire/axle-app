import React, { Component } from 'react';
import { Text } from 'react-native';

import LocationBlock from './../../layouts/common/LocationBlock/LocationBlock';

class PickUpLocation extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <LocationBlock>
        <Text>Hello World</Text>
      </LocationBlock>
    )
  }
};

export { PickUpLocation };
