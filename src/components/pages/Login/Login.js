import React, { Component } from 'react';
import {
  Text, TextInput, View
} from 'react-native';
import Button from '../../atoms/Button';
import { isInputRequired } from '../../../helpers/validation';
import { EMAIL, PASSWORD } from '../../../constants/fieldNames';
import { removeData } from '../../../storage';
import { USER } from '../../../constants/storageKeys';
import style from '../../../assets/style';

class Login extends Component {
  async componentDidMount() {
    removeData(USER);
  }

  render() {
    const {
      errors,
      navigation: { navigate },
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
      values
    } = this.props;

    return (
      <View style={[style.container, style.content]}>
        <Text style={style.label}>Login</Text>
        <TextInput
          style={isInputRequired(errors.email)}
          onChangeText={handleChange(EMAIL)}
          onBlur={handleBlur(EMAIL)}
          value={values.email}
        />
        <Text style={style.label}>Password</Text>
        <TextInput
          style={isInputRequired(errors.password)}
          secureTextEntry
          onChangeText={handleChange(PASSWORD)}
          onBlur={handleBlur(PASSWORD)}
          value={values.password}
        />
        <Button
          onPress={handleSubmit}
          text='Login'
          loading={isSubmitting}
        />
        <Text style={style.link}
          onPress={() => navigate('CreateAccount')}
        >
          Create new account
        </Text>
        <Text style={style.link}
          onPress={() => navigate('ResetPassword')}
        >
          Reset your password
        </Text>
        <Text style={style.labelError}>
          {errors.api}
        </Text>
      </View>
    );
  }
}

export default Login;
