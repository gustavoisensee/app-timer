import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Button from '../../atoms/Button';
import style from '../../../assets/style';

class ResetPassword extends PureComponent {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={[style.container, style.content]}>
        <Text>This is the reset password page</Text>
        <Button
          onPress={() => goBack()}
          text='Back'
          isPrimary={false}
        />
      </View>
    )
  }
}

export default ResetPassword;

