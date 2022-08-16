// const Admin = require("../../Domain/Core/Admin/Admin");

// class UpdateAdminDTO {
// 	constructor(adminId, name, email, password) {
//         // this.adminId = adminId;
// 		this.name = name;
// 		this.email = email;
// 		this.password = password;
// 	}

//     getAdminId() {
// 		return this.adminId;
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

//     getAdmin(){
// 		const {adminId, name, email, password} = this
// 		return Admin.create({name, email, password}, adminId)
// 	}

// 	static create({adminId, name, email, password}){
// 		return new UpdateAdminDTO(adminId, name, email, password)
// 	}
// }

// module.exports = UpdateAdminDTO;