// const Admin = require("../../Domain/Core/Admin/Admin");

// class CreateAdminDTO {
// 	constructor(name, email, password) {
// 		this.name = name;
// 		this.email = email;
// 		this.password = password;
// 	}

// 	getName() {
// 		return this.name;
// 	}

// 	getEmail() {
// 		return this.email;
// 	}

// 	getPassword() {
// 		return this.password;
// 	}

// 	getAdmin(){
// 		const {name, email, password} = this
// 		return Admin.create({name, email, password})
// 	}

// 	static create({name, email, password}){
// 		return new CreateAdminDTO(name, email, password)
// 	}
// }

// module.exports = CreateAdminDTO;