import validationService from "../Validation/ValidationService"; 
export const registerValidation = (dto) => {
  const {username, email, password } = dto;
  const Email = !validationService.checkEmpty(email);
  const Username = !validationService.checkEmpty(username);
  const Password = !validationService.checkEmpty(password);

  const PasswordLength = !validationService.validateLength(password, 4, 15);
  const EmailLength = !validationService.validateLength(email, 15, 40);
  const UsernameLength = !validationService.validateLength(username, 5, 40);

  if ((Email && Username && Password)) {
    if ((PasswordLength && EmailLength && UsernameLength)) {
      if (validationService.validateEmail(email)) {
        return true;
      } else {
        return {status: 400, message: "Email is not valid"};
      }
    } else {
      return {status: 400, message: "Please Enter Valid Lengths"}; 
    }
  } else {
    return {status: 400, message: "Please Enter All Values"};
  }
};
export const loginValidation = (dto) => {
  const { email, password } = dto;
  const Email = !validationService.checkEmpty(email);
  const Password = !validationService.checkEmpty(password);

  const PasswordLength = !validationService.validateLength(password, 4, 15);
  const EmailLength = !validationService.validateLength(email, 15, 40);

  if ((Email && Password)) {
    if ((PasswordLength && EmailLength)) {
      if (validationService.validateEmail(email)) {
        return true;
      } else {
        return {status: 400, message: "Email is not valid"};
      }
    } else {
      return {status: 400, message: "Please Enter Valid Lengths"};
    }
  } else {
    return {status: 400, message: "Please Enter All Values"};
  }
};
