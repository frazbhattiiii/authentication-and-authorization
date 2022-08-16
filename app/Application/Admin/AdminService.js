// const AdminMap = require('../../Domain/Core/Admin/AdminMap');
// const Helper = require('../../Infrastructure/Utils/helper');

// class AdminService {
// 	constructor(adminRepository) {
// 		this.adminRepository = adminRepository
// 	}

// 	async addAdmin(dto) {

// 		const admin = await this.adminRepository.fetchByEmail(
// 			dto.getEmail()
// 		)

// 		if(Helper.objectLength(admin) > 0){
// 			return {status: 400, message: 'this email already exists'};
// 		}

// 		const result = await this.adminRepository.add(dto.getAdmin())

// 		if (!result) {
// 			return {status: 400, message: 'admin create failed'};
// 		}

// 		return {
// 			status: 200,
// 			message: "admin created successfully",
// 		}
// 	}

// 	async updateAdmin(dto) {

// 		const admin = await this.adminRepository.fetchById(
// 			dto.getAdminId(),
// 		);
	
// 		if (Helper.objectLength(admin) == 0) {
// 			return {status: 404, message: 'no admin record found against the provided input'};
// 		}
	
// 		const result = await this.adminRepository.update(dto.getAdmin());
	
// 		if (!result) {
// 			return {status: 400, message: 'admin update failed'};
// 		}
	
// 		return {
// 			status: 200,
// 			message: "admin update successfully",
// 		}
// 	}

// 	async findAdmin(dto) {
// 		const admin = await this.adminRepository.fetchById(
// 			dto.getAdminId(),
// 		  );
	  
// 		if (Helper.objectLength(admin) == 0) {
// 			return {status: 404, message: 'no admin record found against the provided input'};
// 		}

// 		return {
// 			status: 200,
// 			data: admin.map((admin) => {
// 				return AdminMap.toDTO(admin);
// 			})
// 		}
// 	}


// 	async getAdmins() {
// 		const result = await this.adminRepository.fetchAll();
	  
// 		return {
// 			status: 200,
// 			data: result.map((admin) => {
// 				return AdminMap.toDTO(admin);
// 			})
// 		}
// 	}

// 	async deleteAdmin(dto) {
// 		const admin = await this.adminRepository.fetchById(dto.getAdminId())

// 		if (Helper.objectLength(admin) == 0) {
// 			return {status: 400, message: "admin doesn't exists"};
// 		}

// 		await this.adminRepository.remove(dto.getAdminId())

// 		return {
// 			status: 200,
// 			message: "admin deleted successfully",
// 		}
// 	}
// }

// module.exports = AdminService;