import Login from './Login';
import { withFormik } from 'formik';
import { allFieldRequired } from '../../../helpers/validation';
import { login } from '../../../services/account';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),

  validateOnBlur: false,
  validateOnChange: false,
  validate: allFieldRequired,

  handleSubmit: (values, { props, resetForm, setErrors, setSubmitting }) => {
    login(values)
      .then(({ status, ...response }) => {
        const { message } = JSON.parse(response._bodyText);
        const { navigate } = props.navigation;

        if (status === 400) {
          setErrors({ api: message });
          setSubmitting(false);
        }
        if (status === 200) {
          resetForm();
          navigate('Dashboard');
        }
      })
      .catch(() => setSubmitting(false));
  },

  displayName: 'LoginForm',
})(Login);

export default EnhancedForm;
