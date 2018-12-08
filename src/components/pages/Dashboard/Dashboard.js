import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Header from '../../molecules/Header';
import { withoutNavigationBar } from '../../templates/NavigationBar';
import style from '../../style';

class Dashboard extends PureComponent {
  render() {
    return (
      <View style={style.container}>
        <Header />
        <Text>Welcome to the Dashboard page</Text>
      </View>
    )
  }
}

export default withoutNavigationBar(Dashboard);

