import style from '../assets/style';

export const isInputRequired = (value) =>
  value ? { ...style.input, ...style.inputRequired } : { ...style.input };

export const allFieldRequired = (values) => {
  const errors = {};
  Object.keys(values).forEach(key => {
    if (!values[key]) {
      errors[key] = true;
    }
  });
  return errors;
}