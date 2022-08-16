import { v4 as uuidv4 } from "uuid";
export default class CreateOrganizationDTO {
  constructor(name, type, userID) {
    this.orgId = uuidv4();
    this.userID = userID;
    this.name = name;
    this.type = type;
  }
  getName() {
    return this.name;
  }
  getUserId() {
    return this.userID;
  }
  getOrganziaitonId() {
    return this.orgId;
  }
  getType() {
    return this.type;
  }
  getOrganization() {
    const { userID, orgId, name, type } = this;
    return { userID, orgId, name, type };
  }
}
