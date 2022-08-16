import { v4 as uuidv4 } from "uuid";
export default class CreateProjectDTO {
  constructor(name, description, userID) {
    this.projId = uuidv4();
    this.userID = userID;
    this.name = name;
    this.description = description;
  }
  getName() {
    return this.name;
  }
  getUserId() {
    return this.userID;
  }
  getOrganziaitonId() {
    return this.projId;
  }
  getdescription() {
    return this.description;
  }
  getProject() {
    const { userID, projId, name, description } = this;
    return { userID, projId, name, description };
  }
}
