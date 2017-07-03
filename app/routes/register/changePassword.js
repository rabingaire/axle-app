import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';

let self;

export default class ChangePassword extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {

    }

  }

  render(){
    const { navigate } = this.props.navigation;
    return (

      <View style={commonStyle.container}>
      <View style={[commonStyle.headerBarHeight,{backgroundColor:common.blackColor,flexDirection : 'row'}]}>
      <TouchableHighlight onPress={() => {}} underlayColor="transparent" style={[{width : 60,height : 50,marginTop : 30},commonStyle.contentCenter]}>
        <Image
          style={{width : 21, height : 18}}
          source={images.Arrow_White_Left}
        />
      </TouchableHighlight>
        <View style={commonStyle.contentCenter}>
          <Text style={[commonStyle.fontSize_16,{color:'#ffffff',paddingTop :35}]}>Change Password</Text>
        </View>
      </View>
        <View style={commonStyle.subContainer}>

            <View style={{paddingTop:36}}>

                    <View style={commonStyle.paddingBottom_36}>
                        <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6]}>CURRENT PASSWORD</Text>
                        <TextInput
                          style={[commonStyle.textInput]}
                        //  onChangeText={(text) => this.setState({mobile})}
                          value={this.state.text}
                        />
                    </View>

                    <View style={commonStyle.paddingBottom_16}>
                      <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6]}>NEW PASSWORD</Text>
                      <TextInput
                        style={[commonStyle.textInput]}
                        //onChangeText={(text) => this.setState({password})}
                        value={this.state.text}
                        secureTextEntry ={true}
                      />
                  </View>
                  <View style={commonStyle.paddingBottom_16}>
                    <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6]}>CONFIRM PASSWORD</Text>
                    <TextInput
                      style={[commonStyle.textInput]}
                      //onChangeText={(text) => this.setState({password})}
                      value={this.state.text}
                      secureTextEntry ={true}
                    />
                </View>


                </View>
                <View  style={{position:'absolute',bottom:20}} >
                  <TouchableHighlight  underlayColor={common.tuchableUnderlayGrayColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.grayColor}]}>
                    <Text style={commonStyle.fontSize_14}>CHANGE PASSWORD</Text>
                  </TouchableHighlight>
                </View>

            </View>

      </View>
    )
  }
  //************************************** Render end*****************************//
};
