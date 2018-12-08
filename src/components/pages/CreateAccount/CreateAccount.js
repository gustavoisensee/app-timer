import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { withoutNavigationBar } from '../../templates/NavigationBar';
import style from '../../style';

class CreateAccount extends PureComponent {
  render() {
    return (
      <View style={style.container}>
        <Text>This is the create account page</Text>
      </View>
    )
  }
}

export default withoutNavigationBar(CreateAccount);

