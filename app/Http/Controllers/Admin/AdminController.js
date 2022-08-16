const CreateAdminDTO = require("../../../Application/Admin/CreateAdminDTO")
const GetAdminDTO = require("../../../Application/Admin/GetAdminDTO")
const UpdateAdminDTO = require("../../../Application/Admin/UpdateAdminDTO")
const DeleteAdminDTO = require("../../../Application/Admin/DeleteAdminDTO")

class AdminController {
	constructor(adminService) {
		this.adminService = adminService
	}

	addAdmin = async (req, res) => {
		const { name, email, password } = req.body
		const dto = CreateAdminDTO.create({name, email, password})
		
		const response = await this.adminService.addAdmin(dto);
		res.send(response)
	}

	updateAdmin = async (req, res) => {
		const { adminId } = req.params
		const body = req.body
		const dto = UpdateAdminDTO.create({...body, adminId})
		
		const response = await this.adminService.updateAdmin(dto);
		res.send(response)
	}

	findAdmin = async (req, res) => {
		const { adminId } = req.params
		const dto = new GetAdminDTO(adminId)

		const response = await this.adminService.findAdmin(dto)
		res.send(response)
	}

	getAdmins = async (req, res) => {
		const response = await this.adminService.getAdmins()
		res.send(response)
	}

    deleteAdmin = async (req, res) => {
        const { adminId } = req.params
		const dto = new DeleteAdminDTO(adminId)

		const response = await this.adminService.deleteAdmin(dto)
		res.send(response)
    }
}

module.exports = AdminController