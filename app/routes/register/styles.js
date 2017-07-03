import { StyleSheet , Dimensions } from 'react-native';
import common from './../../config/common.js';

let window = Dimensions.get("window");

export default StyleSheet.create({
  btnLogin: {
    height: 50,
    width : window.width - (common.marginHorizontal + common.marginHorizontal),
  },
  textInputParent : {
    borderWidth: 1,
    borderColor: common.grayColor,
    flexDirection : 'row',
  },
  txtInutStyle : {
    height: 40,
    paddingHorizontal:6.2,
    width : window.width - 65,
    },
    validationImg : {
      marginTop : 10,
    },


});
