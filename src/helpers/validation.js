import style from '../components/style';

export const isInputRequired = (value) =>
  value ? { ...style.input, ...style.inputRequired } : { ...style.input };