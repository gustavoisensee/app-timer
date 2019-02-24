import Profile from './Profile';
import { withFormik } from 'formik';
import { allFieldRequired } from '../../../helpers/validation';
// import { ERROR, SUCCESS } from '../../../constants/status';
// import { create } from '../../../services/account';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    name: '',
  }),

  validateOnBlur: false,
  validateOnChange: false,
  validate: allFieldRequired,

  handleSubmit: (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
    // TODO: create user update action
    // create(values)
    //   .then(({ status, ...response }) => {
    //     const { message } = JSON.parse(response._bodyText);
        
    //     if ([400, 409].includes(status)) {
    //       setStatus(ERROR);
    //       setErrors({ api: message });
    //     }
    //     if (status === 200) {
    //       resetForm();
    //       setStatus(SUCCESS);
    //     }
    //     setSubmitting(false);
    //   })
    //   .catch((e) => setSubmitting(false));
  },

  displayName: 'ProfileForm',
})(Profile);

export default EnhancedForm;
