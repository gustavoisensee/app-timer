import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../atoms/Button';
import { isInputRequired } from '../../../helpers/validation';
import { EMAIL } from '../../../helpers/fieldNames';
import style from '../../../assets/style';

class ResetPassword extends PureComponent {
  render() {
    const {
      errors,
      handleSubmit,
      handleChange,
      handleBlur,
      isSubmitting,
      navigation: { goBack }
    } = this.props;

    return (
      <View style={[style.container, style.content]}>
        <Text style={style.label}>Email</Text>
        <TextInput
          style={isInputRequired(errors.email)}
          onChangeText={handleChange(EMAIL)}
          onBlur={handleBlur(EMAIL)}
        />
        <Button
          onPress={handleSubmit}
          text='Request reset password'
          loading={isSubmitting}
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

