import { v4 as uuidv4 } from "uuid";
export default class CreateUserDTO {
  constructor(username, email, password) {
    this.userID = uuidv4();
    this.username = username;
    this.email = email;
    this.password = password;
  }
  getUsername() {
    return this.username;
  }
  getUserID() {
    return this.userID;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  setPassword(password) {
    this.password = password;
  }
  getUser() {
    const { userID, username, email, password } = this;
    return {userID, username, email, password };
  }
}
