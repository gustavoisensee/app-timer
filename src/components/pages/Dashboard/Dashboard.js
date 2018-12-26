import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Header from '../../molecules/Header';
import style from '../../../assets/style';

class Dashboard extends PureComponent {
  render() {
    const { toggleDrawer } = this.props.navigation;
    return (
      <View style={[style.content]}>
        <Header toggleDrawer={toggleDrawer} />
        <View style={[style.container, style.content]}>
          <Text>Welcome to the Dashboard page</Text>
        </View>
      </View>
    )
  }
}

export default Dashboard;

