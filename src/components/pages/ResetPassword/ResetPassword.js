import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Button from '../../atoms/Button';
import { useNavigationOptions } from '../../../helpers/navigation';
import style from '../../../assets/style';

class ResetPassword extends PureComponent {
  static navigationOptions = useNavigationOptions();

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[style.container, style.content]}>
        <Text>This is the reset password page</Text>
        <Button
          onPress={() => navigate('Login')}
          text='Back'
          isPrimary={false}
        />
      </View>
    )
  }
}

export default ResetPassword;

