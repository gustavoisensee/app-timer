import React, { PureComponent } from 'react';
import {
  View, Image, TouchableWithoutFeedback
} from 'react-native';
import style from './style';
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
