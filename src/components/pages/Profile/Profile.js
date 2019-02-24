import React, { Component } from 'react';
import { ScrollView, Text, TextInput } from 'react-native';
import { isInputRequired } from '../../../helpers/validation';
import Button from '../../atoms/Button';
import { NAME } from '../../../constants/fieldNames';
import { ERROR, SUCCESS } from '../../../constants/status';
import style from '../../../assets/style';

class CreateAccount extends Component {
  componentDidMount() {
    // this.props.getUser();
  }

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
        <Text style={[style.label, style.h3]}>Profile page</Text>
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
          value={values.email}
        />
        <Button
          onPress={handleSubmit}
          text='Save'
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

