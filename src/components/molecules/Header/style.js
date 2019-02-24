import { StyleSheet, StatusBar, Platform } from 'react-native';
import Colors from '../../../assets/colors';

const height = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight;

export default StyleSheet.create({
  container: {
    marginTop: height,
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
