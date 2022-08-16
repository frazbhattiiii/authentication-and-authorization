import bcrypt from "bcryptjs";
import config from "@Infrastructure/config";
import {
  registerValidation,
  loginValidation,
} from "./validations";
import jwt from "jsonwebtoken";
const { server } = config;
class AuthService {
  constructor(usersRepository, tokensRepository) {
    this.usersRepository = usersRepository;
    this.tokensRepository = tokensRepository;
  }

  async verifyPassword(password, encryptedPassword) {
    return await bcrypt.compare(password, encryptedPassword);
  }
  async encryptPassword(password) {
    return await bcrypt.hash(password, 12);
  }
  async createToken(userID) {
    const token = jwt.sign({ userID: userID }, server.JWT_SECRET, {
      expiresIn: "2d",
    });
    return token;
  }
  async register(dto) {
    const validation = registerValidation(dto);
    if (validation != true) {
      return { status: 400, message: validation.message };
    }
    const user = await this.usersRepository.fetchByEmail(dto.getEmail());
    if (user.length > 0) {
      return { status: 400, message: "Email already exists" };
    }

    const encryptedPassword = await this.encryptPassword(dto.getPassword());
    dto.setPassword(encryptedPassword);
    const response = await this.usersRepository.add(dto.getUser());

    return response;
  }
  async login(dto) {
    try {
      const validation = loginValidation(dto);
      if (validation != true) {
        return { status: 400, message: validation(dto).message };
      }
      const user = await this.usersRepository.fetchByEmail(dto.getEmail());
      if (user.length == 0) {
        return { status: 400, message: "User not found" };
      }

      const verifyPassword = await this.verifyPassword(
        dto.getPassword(),
        user[0].password
      );
      if (!verifyPassword) {
        return { status: 400, message: "Email or Password is incorrect" };
      }

      const accessToken = await this.createToken(user[0].userID);

      if (!accessToken) {
        return { status: 400, message: "There is some error try again later" };
      }
      const token = {
        userID: user[0].userID,
        token: accessToken,
        type:'simple'
      };
      const tokens = await this.tokensRepository.fetchById(user[0].userID);
      if (tokens.length > 0) {
        const response = await this.tokensRepository.update(tokens[0]);
        return { status: 200, message: "Login Successful", token: accessToken };
      }
      const response = await this.tokensRepository.add(token);
      return response;
    } catch (error) {
      console.log("Error", error);
      return { status: 400, message: "Some internal error occurs try again later."};
    }
  }
}
module.exports = AuthService;
