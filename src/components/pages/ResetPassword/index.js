import ResetPassword from './ResetPassword';
import { withFormik } from 'formik';
import { allFieldRequired } from '../../../helpers/validation';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    email: ''
  }),

  validateOnBlur: false,
  validateOnChange: false,
  validate: allFieldRequired,

  handleSubmit: (values, { resetForm, setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'ResetPasswordForm',
})(ResetPassword);

export default EnhancedForm;
