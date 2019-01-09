import CreateAccount from './CreateAccount';
import { withFormik } from 'formik';
import { allFieldRequired } from '../../../helpers/validation';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    name: '',
    password: '',
    passwordConfirmation: ''
  }),

  validateOnBlur: false,
  validateOnChange: false,
  validate: values => {
    const errors = { ...allFieldRequired(values) };
    if (values.password !== values.passwordConfirmation) {
      errors.differentPassword = true;
    }
    return errors;
  },

  handleSubmit: (values, { resetForm, setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'CreateAccountForm',
})(CreateAccount);

export default EnhancedForm;
