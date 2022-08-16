export default class CreateIssueDTO {
  constructor(summary,description,issueType,projectId) {
    this.summary = summary;
    this.description = description;
    this.issueType = issueType;
    this.projectId = projectId;
  }
 
  getSummary(){
    return  this.summary;
  }
  getIssueType(){
    return  this.issueType;
  }
  getProjectId(){
    return  this.projectId;
  }
  getDescription(){
    return  this.description;
  }
  getIssue(){
    return {
      fields:{
      summary: this.summary,
      issuetype: {
       "id": this.issueType
      },
      project:{
        id:this.projectId,
      },      
      "description": {
        "type": "doc",
        "version": 1,
        "content": [
            {
            "type": "paragraph",
            "content": [
                {
                "text": `${this.description}`,
                "type": "text"
                }
            ]
            }
          ]
        },
     }
    };
  }
}
