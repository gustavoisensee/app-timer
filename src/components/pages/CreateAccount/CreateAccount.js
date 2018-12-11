import React, { PureComponent } from 'react';
import { View, Text, TextInput, ScrollView} from 'react-native';
import { withoutNavigationBar } from '../../templates/NavigationBar';
import { isInputRequired } from '../../../helpers/validation';
import Button from '../../atoms/Button';
import style from '../../../assets/style';

class CreateAccount extends PureComponent {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    error: null,
    submitting: false
  }

  handleSubmit = () => {
    const { name, email, password, passwordConfirmation, submitting } = this.state;
    this.setState({
      nameRequired: !name,
      emailRequired: !email,
      passwordRequired: !password,
      passwordConfirmationRequired: !passwordConfirmation
    });

    if (name && email && password && passwordConfirmation && !submitting) {
      this.setState({ submitting: true });
      // TODO: fetch to create the account
      setTimeout(() => this.setState({ submitting: false }), 2000);
    }
  }

  render() {
    const {
      error,
      submitting,
      nameRequired,
      emailRequired,
      passwordRequired,
      passwordConfirmationRequired,
    } = this.state;
    const { navigate } = this.props.navigation;
    const nameStyle = isInputRequired(nameRequired);
    const emailStyle = isInputRequired(emailRequired);
    const passwordStyle = isInputRequired(passwordRequired);
    const passwordConfirmationStyle = isInputRequired(passwordConfirmationRequired);

    return (
      <ScrollView contentContainerStyle={style.container}>
        <Text style={[style.label, style.h3]}>Create account page</Text>
        <Text style={style.label}>Name</Text>
        <TextInput
          style={nameStyle}
          onChangeText={name => this.setState({ name })}
        />
        <Text style={style.label}>Email</Text>
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
        <Text style={style.label}>Confirmation</Text>
        <TextInput
          style={passwordConfirmationStyle}
          secureTextEntry
          onChangeText={passwordConfirmation => this.setState({ passwordConfirmation })}
        />
        <Button
          onPress={this.handleSubmit}
          text='Create'
          loading={submitting}
        />
        <Button
          onPress={() => navigate('Login')}
          text='Back'
          isPrimary={false}
        />
      </ScrollView>
    )
  }
}

export default withoutNavigationBar(CreateAccount);

