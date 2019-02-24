import ResetPassword from './ResetPassword';
import { withFormik } from 'formik';
import { allFieldRequired } from '../../../helpers/validation';
import { ERROR, SUCCESS } from '../../../constants/status';
import { requestResetPassword } from '../../../services/account';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    email: ''
  }),

  validateOnBlur: false,
  validateOnChange: false,
  validate: allFieldRequired,

  handleSubmit: (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
    requestResetPassword(values)
      .then(({ status, ...response }) => {
        const { error } = JSON.parse(response._bodyText);
        
        if ([400].includes(status)) {
          setStatus(ERROR);
          setErrors({ api: error });
        }
        if (status === 200) {
          resetForm();
          setStatus(SUCCESS);
        }
        setSubmitting(false);
      })
      .catch((e) => setSubmitting(false));
  },

  displayName: 'ResetPasswordForm',
})(ResetPassword);

export default EnhancedForm;
