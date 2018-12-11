import React, { PureComponent } from 'react';
import {
  Text, TextInput, View
} from 'react-native';
import Button from '../../atoms/Button';
import { login } from '../../../actions/login';
import { withoutNavigationBar } from '../../templates/NavigationBar';
import { isInputRequired } from '../../../helpers/validation';
import style from '../../../assets/style';

class Login extends PureComponent {
  state = {
    email: '',
    password: '',
    error: null,
    submitting: false
  }

  handleSubmit = () => {
    const { email, password, submitting } = this.state;
    this.setState({
      emailRequired: !email,
      passwordRequired: !password,
    });

    if (email && password && !submitting) {
      this.setState({ submitting: true });
      try {
        login(this.state)
          .then(({ status, ...response }) => {
            console.log('response: ', response);
            const { message } = JSON.parse(response._bodyText);
            const { navigate } = this.props.navigation;
            console.log(status, message);
            if (status === 400) this.setState({ error: message, submitting: false })
            if (status === 200) {
              this.setState({
                error: null,
                email: null,
                password: null,
                submitting: false
              });
              navigate('Dashboard');
            }
          })
          .catch(err => {
            console.log('error: ', err);
            console.log(err.bodyText);
            this.setState({ submitting: false })
          });
      } catch (e) {
        console.log('catch');
      }
    }
  }

  render() {
    const { error, emailRequired, passwordRequired, submitting } = this.state;
    const { navigate } = this.props.navigation;
    const emailStyle = isInputRequired(emailRequired);
    const passwordStyle = isInputRequired(passwordRequired);

    return (
      <View style={[style.container, style.content]}>
        <Text style={style.label}>Login</Text>
        <TextInput
          style={emailStyle}
          onChangeText={email => this.setState({ email })}
        />
        <Text style={style.label}>Password</Text>
        <TextInput
          style={passwordStyle}
          secureTextEntry
          onChangeText={password => this.setState({ password })}
        />
        <Button
          onPress={this.handleSubmit}
          text='Login'
          loading={submitting}
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
          {error}
        </Text>
      </View>
    );
  }
}

export default withoutNavigationBar(Login);
