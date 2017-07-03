import React , { Component }from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import styles from './styles';
import images from './../../config/images.js';
import commonStyle from './../../config/commonStyle.js';
import common from './../../config/common.js';

let self;

export default class Login extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {
      mobile:'',
      password: '',

    }

  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={commonStyle.container}>
      <View style={commonStyle.headerBarHeight}>
        <TouchableHighlight onPress={() => {}} underlayColor="transparent" style={[{width : 60,height : 50,marginTop : 30},commonStyle.contentCenter]}>
          <Image
            style={{width : 21, height : 18}}
            source={images.Back_Arrow}
          />
        </TouchableHighlight>
      </View>
        <View style={commonStyle.subContainer}>
            <View style={commonStyle.contentCenter}>
                <Image
                style={{}}
                source={images.axle}
              />
              <Text style={[commonStyle.fontSize_16,{color:common.blackColor,lineHeight:30,paddingTop:10}]}>Login to access your account</Text>
            </View>

            <View style={{paddingTop:56}}>

                    <View style={commonStyle.paddingBottom_16}>
                        <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6]}>MOBILE NUMBER</Text>
                      <View style={styles.textInputParent}>

                      <TextInput
                        // onChangeText={(email) => this.emailTextInput(email)}
                        underlineColorAndroid = "transparent"
                        // value={this.state.mobile}
                        style={styles.txtInutStyle}
                        />
                        <Image
                            style={[styles.validationImg]}
                            source={images.passwordLock}
                          />
                        </View>
                    </View>

                    <View style={commonStyle.paddingBottom_16}>
                      <Text style={[commonStyle.fontSize_12,commonStyle.paddingBottom_6]}>PASSWORD</Text>

                      <View style={styles.textInputParent}>

                      <TextInput
                        // onChangeText={(email) => this.emailTextInput(email)}
                        underlineColorAndroid = "transparent"
                        // value={this.state.mobile}
                          secureTextEntry ={true}
                        style={styles.txtInutStyle}
                        />
                        <Image
                            style={[styles.validationImg]}
                            source={images.passwordLock}
                          />
                        </View>
                  </View>

                  <TouchableHighlight underlayColor={common.tuchableUnderlayGrayColor} style={[styles.btnLogin,commonStyle.contentCenter,{backgroundColor:common.grayColor,marginTop:20}]}>
                    <Text style={commonStyle.fontSize_14}>LOGIN</Text>
                  </TouchableHighlight>


                </View>
            </View>

            <View style={{}}>
                  <TouchableHighlight onPress={() => navigate('Login')}  style={[commonStyle.contentCenter,{bottom:47}]}>
                    <Text style={[commonStyle.fontSize_14,{color:common.blackColor}]}>Forgot your Password?</Text>
                  </TouchableHighlight>

                  <TouchableHighlight onPress={() => navigate('SignUp')} style={[commonStyle.contentCenter,{bottom:34}]}>
                    <Text style={[commonStyle.fontSize_14,{color:common.blackColor}]}>Don’t have an account? Sign up here</Text>
                  </TouchableHighlight>
            </View>
      </View>
    )
  }
  //************************************** Render end*****************************//
};
