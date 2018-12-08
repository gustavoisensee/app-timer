import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { withoutNavigationBar } from '../../templates/NavigationBar';
import style from '../../style';

class ResetPassword extends PureComponent {
  render() {
    return (
      <View style={style.container}>
        <Text>This is the reset password page</Text>
      </View>
    )
  }
}

export default withoutNavigationBar(ResetPassword);

