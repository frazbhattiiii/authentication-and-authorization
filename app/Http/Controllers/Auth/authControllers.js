import CreateUserDTO from "@Application/Auth/CreateUserDTO"; 
import CreateLoginDTO from "@Application/Auth/CreateLoginDTO";
class authController {
  constructor(authService) {
		this.authService = authService
	}
  login = async (req, res) => {
    const {email, password} = req.body;
    const dto=new CreateLoginDTO(email, password)
    const response = await this.authService.login(dto);
    res.send(response);
  };
  register = async (req, res) => {
    const { username, email, password } = req.body;
    const dto= new CreateUserDTO(username, email, password)
    const response = await this.authService.register(dto);
    res.send(response);
  };
}
module.exports = authController; 

