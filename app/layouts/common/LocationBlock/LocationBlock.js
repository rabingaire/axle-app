import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

import styles from './styles';

export default class LocationBlock extends Component {
  render() {
    const { title, place, street, location } = this.props
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{ title }</Text>
        <View style={styles.circle}>
          <Icon name='directions' color='#FFFFFF' size={19} style={styles.directionIcon} />
          <Text style={styles.circleText}>GO</Text>
        </View>
        <Text style={styles.address}>
          { place } {"\n"}
          { street } {"\n"}
          { location }
        </Text>
      </View>
    )
  }
}
