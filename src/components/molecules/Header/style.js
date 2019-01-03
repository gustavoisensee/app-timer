import { Constants } from 'expo'
import { StyleSheet } from 'react-native';
import Colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    width: '100%',
    padding: 8,
    height: 48,
    backgroundColor: Colors.BLUE
  },
  menu: {
    width: 28,
    height: 32
  }
});
