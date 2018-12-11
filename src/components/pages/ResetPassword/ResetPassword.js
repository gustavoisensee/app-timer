import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { withoutNavigationBar } from '../../templates/NavigationBar';
import Button from '../../atoms/Button';
import style from '../../../assets/style';

class ResetPassword extends PureComponent {
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

export default withoutNavigationBar(ResetPassword);

