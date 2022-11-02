const emailRegExp = /(^|\s+)[\w\-.]+@([\w-]+\.)+[\w-]{2,4}($|\s+)/;
const latinAlph = new RegExp('^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$');
const passSymbols = new RegExp('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$');

export const validateRequired = (value: string) => {
  if(!value) {
    return 'Required field';
  };

  return '';
};

export const validateConfirm = (password: string, confirmPassword: string) => {
  if(password !== confirmPassword) {
    return 'Match password and confirmation'
  };

  return '';
};

export const validateEmail = (value: string) => {
  if(!emailRegExp.test(value))  {

    return 'Wrong email format';
  };

  if(value === '') {
    return 'Required field';
  };

  // if(!latinAlph.test(value)) {
  //   return 'Only latin symbols are accepted';
  // };

  return '';
};

export const validatePassword = (value: string) => {
  if(!passSymbols.test(value)) {
    return 'Password should be contain with at least 8 symbols with latin upper and lower case letters, special symbols and numbers'
  };

  return '';
};