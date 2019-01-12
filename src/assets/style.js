import { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    padding: 10,
  },
  content: {
    height: '100%'
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30
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
  labelSuccess: {
    height: 20,
    color: Colors.GREEN,
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
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 20,
  },
  inputRequired: {
    borderWidth: 1,
    borderColor: Colors.RED
  },
  inputLabelError: {
    color: Colors.RED,
    marginTop: -12,
    marginBottom: 12
  },
});
