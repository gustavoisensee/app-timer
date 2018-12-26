import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Header from '../../molecules/Header';
import Button from '../../atoms/Button';
import { useNavigationOptions } from '../../../helpers/navigation'
import style from '../../../assets/style';

class Dashboard extends PureComponent {
  static navigationOptions = useNavigationOptions();

  render() {
    const { navigate } = this.props.navigation;
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

export default Dashboard;

