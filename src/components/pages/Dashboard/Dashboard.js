import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Header from '../../molecules/Header';
import { withoutNavigationBar } from '../../templates/NavigationBar';
import Button from '../../atoms/Button';
import style from '../../../assets/style';

class Dashboard extends PureComponent {
  render() {
    return (
      <View style={[style.container, style.content]}>
        <Header />
        <Text>Welcome to the Dashboard page</Text>
        <Button
          onPress={() => navigate('Login')}
          text='Back'
          isPrimary={false}
        />
      </View>
    )
  }
}

export default withoutNavigationBar(Dashboard);

