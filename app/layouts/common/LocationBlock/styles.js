import { StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get("window");

export default {
  wrapper: {
    height: 180,
    width: window.width,
    backgroundColor: '#000000',
  },
  title: {
    color: '#A5DB03',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 46,
    marginLeft: 20,
    lineHeight: 30
  },
  circle: {
    height: 39,
    width: 39,
    borderRadius: 39/2,
    backgroundColor: '#4285F4',
    position: 'absolute',
    top: 41,
    left: window.width - 59
  },
  directionIcon: {
    marginLeft: 10,
    marginTop: 5
  },
  circleText: {
    color: '#FFFFFF',
    fontSize: 10,
    marginLeft: 12.68,
    marginBottom: 2.56,
    height: 13,
    width: 14
  },
  address: {
    color: '#FFFFFF',
    height: 75,
    width: 262,
    fontSize: 18,
    lineHeight: 25,
    marginLeft: 20,
    marginTop: 6
  }
};
