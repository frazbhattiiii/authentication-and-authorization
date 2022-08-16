export default class CreateProjectDTO {
  constructor(key,name,projectTypeKey,projectTemplateKey,description,leadAccountId, url,assigneeType,avatarId) {
    this.key = key;
    this.name = name;
    this.projectTypeKey = projectTypeKey;
    this.projectTemplateKey = projectTemplateKey;
    this.description = description;
    this.leadAccountId = leadAccountId;
    this.url = url;
    this.assigneeType = assigneeType;
    this.avatarId = avatarId;
  }
  getKey(){
    return  this.key;
  }
  getName(){
    return  this.name;
  }
  getProjectTypeKey(){
    return  this.projectTypeKey;
  }
  getProjectTemplateKey(){
    return  this.projectTemplateKey;
  }
  getDescription(){
    return  this.description;
  }
  getLeadAccountId(){
    return  this.leadAccountId;
  }
  getUrl(){
    return  this.url;
  }
  getAssigneeType(){
    return  this.assigneeType;
  }
  getAvatarId(){
    return  this.avatarId;
  }
  getProject(){
    return {
      key: this.key,
      name: this.name,
      projectTypeKey: this.projectTypeKey,
      projectTemplateKey: this.projectTemplateKey,
      description: this.description,
      leadAccountId: this.leadAccountId,
      url: this.url,
      assigneeType: this.assigneeType,
      avatarId: this.avatarId,
    };
  }
}
