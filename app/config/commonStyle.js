//import {Platform} from 'react-native';
import common from './common.js';

export default commonStyle = {
  container: {
      flex: 1,
    backgroundColor:common.whiteColor,
  },
  subContainer:{
    flex: 1,
    marginHorizontal:common.marginHorizontal,
  },
  headerBarHeight :{
    height : 80
  },
  fontSize_14:{
    color:common.whiteColor,
    //fontFamily:'Proxima Nova',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 17,
  },
  fontSize_16:{
    color:common.blackColor,
    //fontFamily:'Proxima Nova',
    fontSize: 16,
    lineHeight:30,
  },
  fontSize_12:{
    color:common.blackColor,
    //fontFamily: Oswald,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
  },
  textInput:{
    height: 40,
    borderColor: common.grayColor,
    borderWidth: 1,
    paddingHorizontal:6.2,
  },
  contentCenter : {
      justifyContent : 'center',
      alignItems : 'center'
  },
  paddingBottom_6:{
    paddingBottom : 6
  },
  paddingBottom_16:{
    paddingBottom : 16
  },
  paddingBottom_36:{
    paddingBottom :36
  },
  inputTextIcon:{
    paddingRight:16,
    right:0,
  }


};
