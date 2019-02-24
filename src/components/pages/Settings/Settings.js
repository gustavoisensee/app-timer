import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Header from '../../molecules/Header';
import Button from '../../atoms/Button';
import { useNavigationOptions } from '../../../helpers/navigation';
import style from '../../../assets/style';

class Settings extends PureComponent {
  static navigationOptions = useNavigationOptions();

  render() {
    const { goBack, toggleDrawer } = this.props.navigation;
    return (
      <View>
        <Header toggleDrawer={toggleDrawer} />
        <View style={[style.container, style.content]}>
          <Text>This is the Settings</Text>
          <Button
            onPress={() => goBack()}
            text='Back'
            isPrimary={false}
          />
        </View>
      </View>
    )
  }
}

export default Settings;

