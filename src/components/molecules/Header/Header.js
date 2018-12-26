import React, { PureComponent } from 'react';
import {
  View, Button, Image, TouchableWithoutFeedback
} from 'react-native';
import style from './style';
import Colors from '../../../assets/colors';
import sourceImage from './menu.png';

class Login extends PureComponent {
  render() {
    return (
      <TouchableWithoutFeedback
        style={style.container}
        onPress={this.props.toggleDrawer}
      >
        <View style={[style.container]}>
          <Image
            style={style.menu}
            source={sourceImage}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Login;
