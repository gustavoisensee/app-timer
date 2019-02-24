import CreateAccount from './CreateAccount';
import { withFormik } from 'formik';
import { allFieldRequired } from '../../../helpers/validation';
import { ERROR, SUCCESS } from '../../../constants/status';
import { create } from '../../../services/account';

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

  handleSubmit: (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
    create(values)
      .then(({ status, ...response }) => {
        const { message } = JSON.parse(response._bodyText);
        
        if ([400, 409].includes(status)) {
          setStatus(ERROR);
          setErrors({ api: message });
        }
        if (status === 200) {
          resetForm();
          setStatus(SUCCESS);
        }
        setSubmitting(false);
      })
      .catch((e) => setSubmitting(false));
  },

  displayName: 'CreateAccountForm',
})(CreateAccount);

export default EnhancedForm;
