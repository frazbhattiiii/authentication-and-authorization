import CreateOrganizationDTO from "@Application/Organization/CreateOrganizaitonDTO.js";
import GetOrganizationDTO from "@Application/Organization/GetOrganizationDTO";
import UpdateOrganizationDTO from "@Application/Organization/UpdateOrganizationDTO";
import DeleteOrganizationDTO from "@Application/Organization/DeleteOrganizationDTO";

class OrganizationController {
	constructor(organizationService) {
		this.organizationService = organizationService
	}

	addOrganization= async (req, res) => {
		const { name,type,userID } = req.body
		const dto = new CreateOrganizationDTO(name,type,userID)
		
		const response = await this.organizationService.addOrganization(dto);
		res.send(response)
	}

	updateOrganization = async (req, res) => {
		const { orgId } = req.params
		const {name,type} = req.body
		const dto =new UpdateOrganizationDTO(orgId,name,type)
		console.log(dto)
		
		const response = await this.organizationService.updateOrganization(dto);
		res.send(response)
	}

	findOrganization = async (req, res) => {
		const { orgId } = req.params
		const dto = new GetOrganizationDTO(orgId)

		const response = await this.organizationService.findOrganization(dto)
		res.send(response)
	}

	getOrganizations = async (req, res) => {
		const response = await this.organizationService.getOrganizations()
		res.send(response)
	}

    deleteOrganization= async (req, res) => {
        const { orgId } = req.params
		const dto = new DeleteOrganizationDTO(orgId)

		const response = await this.organizationService.deleteOrganization(dto)
		res.send(response)
    }
}

module.exports = OrganizationController;