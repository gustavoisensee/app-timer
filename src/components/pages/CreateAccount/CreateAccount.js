import React, { PureComponent } from 'react';
import { ScrollView, Text, TextInput } from 'react-native';
import { isInputRequired } from '../../../helpers/validation';
import Button from '../../atoms/Button';
import { EMAIL, NAME, PASSWORD, PASSWORD_CONFIRMATION } from '../../../constants/fieldNames';
import { ERROR, SUCCESS } from '../../../constants/status';
import style from '../../../assets/style';

class CreateAccount extends PureComponent {
  render() {
    const {
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
      navigation: { goBack },
      values,
      status
    } = this.props;

    return (
      <ScrollView contentContainerStyle={style.container}>
        <Text style={[style.label, style.h3]}>Create account page</Text>
        <Text style={style.label}>Name</Text>
        <TextInput
          style={isInputRequired(errors.name)}
          onChangeText={handleChange(NAME)}
          onBlur={handleBlur(NAME)}
          value={values.name}
        />
        <Text style={style.label}>Email</Text>
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
        <Text style={style.label}>Confirmation</Text>
        <TextInput
          style={isInputRequired(
            errors.passwordConfirmation || errors.differentPassword
          )}
          secureTextEntry
          onChangeText={handleChange(PASSWORD_CONFIRMATION)}
          onBlur={handleBlur(PASSWORD_CONFIRMATION)}
          value={values.passwordConfirmation}
        />
        {errors.differentPassword &&
          <Text style={style.inputLabelError}>
            Password and Confirmation must be the same.
          </Text>}
        <Button
          onPress={handleSubmit}
          text='Create'
          loading={isSubmitting}
        />
        <Button
          onPress={() => goBack()}
          text='Back'
          isPrimary={false}
        />
        {status === ERROR &&
          <Text style={style.labelError}>
            {errors.api}
          </Text>}
        {status === SUCCESS &&
          <Text style={style.labelSuccess}>
            Account has been created!
          </Text>}
      </ScrollView>
    )
  }
}

export default CreateAccount;

