import { StyleSheet } from 'react-native';
import Colors from '../../../assets/colors';

const defaultButton = {
  display: 'flex',
  width: '100%',
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,
  borderRadius: 2,
  backgroundColor: Colors.WHITE,
  color: Colors.WHITE,
  borderRadius: 25
}

export default StyleSheet.create({
  primaryButton: {
    ...defaultButton,
    backgroundColor: Colors.BLUE,
  },
  primaryLabel: {
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  secondaryButton: {
    ...defaultButton,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.GRAYLIGHT
  },
  secondaryLabel: {
    fontWeight: 'bold',
    color: Colors.GRAY
  }
});
