import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../atoms/Button';
import { isInputRequired } from '../../../helpers/validation';
import style from '../../../assets/style';

class ResetPassword extends PureComponent {
  state = {
    email: '',
    error: null,
    submitting: false
  }

  handleSubmit = () => {
    const { email, submitting } = this.state;
    this.setState({
      emailRequired: !email,
    });

    if (email && !submitting) {
      this.setState({ submitting: true });
      // TODO: fetch to create the account
      setTimeout(() => this.setState({ submitting: false }), 500);
    }
  }

  render() {
    const { goBack } = this.props.navigation;
    const { error, emailRequired, submitting } = this.state;

    return (
      <View style={[style.container, style.content]}>
        <Text style={style.label}>Email</Text>
        <TextInput
          style={isInputRequired(emailRequired)}
          onChangeText={email => this.setState({ email })}
        />
        <Button
          onPress={this.handleSubmit}
          text='Request reset password'
          loading={submitting}
        />
        <Button
          onPress={() => goBack()}
          text='Back'
          isPrimary={false}
        />
      </View>
    )
  }
}

export default ResetPassword;

