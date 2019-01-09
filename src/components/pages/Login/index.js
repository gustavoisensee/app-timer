import Login from './Login';
import { withFormik } from 'formik';
import { allFieldRequired } from '../../../helpers/validation';
import { login } from '../../../actions/login';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),

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
          navigate('Authenticated');
        }
      })
      .catch(() => setSubmitting(false));
  },

  displayName: 'LoginForm',
})(Login);

export default EnhancedForm;
