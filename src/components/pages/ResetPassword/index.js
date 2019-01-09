import ResetPassword from './ResetPassword';
import { withFormik } from 'formik';

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ email: '' }),

  validate: ({ email }) => {
    const errors = {};
    if (!email) {
      errors.email = true;
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
})(ResetPassword);

export default MyEnhancedForm;
