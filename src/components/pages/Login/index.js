import Login from './Login';
import { withFormik } from 'formik';
import { allFieldRequired } from '../../../helpers/validation';
import { login } from '../../../services/account';
import { storeData } from '../../../storage';
import { USER } from '../../../constants/storageKeys';

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
        const result = JSON.parse(response._bodyText);
        const { message } = result;
        const { navigate } = props.navigation;

        if (status === 400) {
          setErrors({ api: message });
          setSubmitting(false);
        }
        if (status === 200) {
          storeData(USER, result);
          resetForm();
          navigate('Dashboard');
        }
      })
      .catch(() => setSubmitting(false));
  },

  displayName: 'LoginForm',
})(Login);

export default EnhancedForm;
