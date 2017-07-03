import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import styles from './styles';
import images from './../../config/images.js';

let self;

export default class Login extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {

    }

  }

  render(){
    return (
      <View style={styles.container}>
        <Text>login</Text>
      </View>
    )
  }
  //************************************** Render end*****************************//
};
