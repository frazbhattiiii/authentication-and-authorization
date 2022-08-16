class validationService {
  validateEmail(email) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validRegex.test(email)) {
      return false;
    } else {
      return true;
    }
  }
  checkEmpty(value) {
    if (value == "") {
      return true;
    } else {
      return false;
    }
  }
  validateLength(field, max, min) {
    if (field.length < min || field.length > max) {
      return false;
    } else {
      return true;
    }
  }
}
export default new validationService();
