import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class LocationBlock extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        {this.props.children}
      </View>
    )
  }
}
