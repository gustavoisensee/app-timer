import { StyleSheet } from 'react-native';

const Colors = {
  BLUE: '#0572f9',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  RED: '#CB2431',
  GRAY: '#424242',
  GRAYLIGHT: '#CCCCCC'
}

const defaultButton = {
  display: 'flex',
  width: '100%',
  height: 50,
  textAlign: 'center',
  textAlignVertical: 'center',
  fontWeight: 'bold',
  marginBottom: 10,
  borderRadius: 2
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: '100%'
  },
  label: {
    fontWeight: '600',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 10,
    color: Colors.GRAY
  },
  labelError: {
    height: 20,
    color: Colors.RED,
  },
  link: {
    color: Colors.BLUE,
    marginBottom: 6
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: Colors.GRAYLIGHT,
    borderWidth: 1,
    borderRadius: 2,
    padding: 4,
    marginBottom: 20,
  },
  inputRequired: {
    borderWidth: 1,
    borderColor: Colors.RED
  },
  primaryButton: {
    ...defaultButton,
    color: Colors.WHITE,
    backgroundColor: Colors.BLUE,
  },
  secondaryButton: {
    ...defaultButton,
    color: Colors.GRAY,
    backgroundColor: Colors.WHITE
  }
});
