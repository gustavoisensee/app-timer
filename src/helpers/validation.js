import style from '../assets/style';

export const isInputRequired = (value) =>
  value ? { ...style.input, ...style.inputRequired } : { ...style.input };