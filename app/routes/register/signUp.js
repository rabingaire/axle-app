import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import styles from './styles';
import images from './../../config/images.js';

let self;

export default class SignUp extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {

    }

  }

  render(){
    return (
      <View style={commonStyle.container}>
        <View style={commonStyle.subContainer}>
            <View style={commonStyle.contentCenter}>
                <Image
                style={{}}
                source={images.axle}
              />
              <Text style={{}}></Text>
            </View>


            </View>
      </View>
    )
  }
  //************************************** Render end*****************************//
};
