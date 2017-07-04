import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

import LocationBlock from './../../layouts/common/LocationBlock/LocationBlock';
import styles from './styles';

export default class PickUpLocation extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return (
      <View>
        <LocationBlock
          title="Pickup Location"
          place="Warehouse"
          street="1234 John Street"
          location="Los Angeles, California 90001" />
        <MapView
          style={styles.maps}
        />
      </View>
    )
  }
};
