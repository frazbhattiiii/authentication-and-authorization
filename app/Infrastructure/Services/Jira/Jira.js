import axios from "axios";
import config from "@Infrastructure/config";
import baseAPI from "@Infrastructure/BaseAPI";

const { jira } = config;
const {get,post,del,patch,put}=baseAPI;
class Jira {
  constructor(tokensRepository) {
    this.tokensRepository = tokensRepository;
  }
  async authUrl() {
      const params={}
      const url=`${jira.JIRA_AUTHCODE_URI}`;
      const headers={
        Accept: "application/json",
      }

    try {
      const { request: {res: { responseUrl },},} = await get(url,params,headers);
      return responseUrl;
    } catch (e) {
      console.log(e);
    }
  }
  async token(code, userId) {
    const url=jira.JIRA_TOKEN_BASE_URI;
    const params={};
    const data={
      grant_type: "authorization_code",
      client_id: `${jira.JIRA_CLIENT_ID}`,
      client_secret: `${jira.JIRA_CLIENT_SECRET}`,
      code: `${code}`,
      redirect_uri: `${jira.JIRA_TOKEN_REDIRECT_URI}`,
    };
    const headers={
      Accept: "application/json",
    };
    try {
      const response = await post(url,data,params,headers)   
      const accessToken = response.data.access_token;
      const refreshToken = response.data.refresh_token;
      const tokens={
        access_token:accessToken,
        refresh_token:refreshToken
      }
      const accessTokenDTO = {
        userId,
        token:accessToken,
        type:"access_token",
        service:"Jira"
      };
      const refreshTokenDTO = {
        userId,
        token:refreshToken,
        type:"refresh_token",
        service:"Jira"
      }
      const users= await this.tokensRepository.fetchById(userId);
      if(users.length >= 2){
        await this.tokensRepository.update(accessTokenDTO);
        await this.tokensRepository.update(refreshTokenDTO);
        return tokens;
      }
      await this.tokensRepository.add(accessTokenDTO);
      await this.tokensRepository.add(refreshTokenDTO);
      return tokens;
    } catch (e) {
      console.log(e);
    }
  }
  async revokeTokens(refreshToken) {
    try {
      const response = await axios({
        method: "Post",
        url: `https://auth.atlassian.com/oauth/token`,
        headers: {
          Accept: "application/json",
        },
        data: {
          grant_type: "refresh_token",
          client_id: `${jira.JIRA_CLIENT_ID}`,
          client_secret: `${jira.JIRA_CLIENT_SECRET}`,
          refresh_token: `${refreshToken}`,
        },
      }); 
      const tokens ={
        access_token:response.data.access_token,
        refresh_token:response.data.refresh_token
      }
      return tokens;
    } catch (error) {
      console.log(error)
    }
  }
  async getTokens(id){
    let accessToken;
    let refreshToken;
    const tokens = await this.tokensRepository.fetchById(id);
    tokens.map(token =>{
      if(token.type === "access_token"){
        accessToken = token.token;
      }
      if(token.type === "refresh_token"){
        refreshToken = token.token;
      }
      })
     const Tokens={
        accessToken,
        refreshToken
      }
      return Tokens;
    }
    async getCloudId(id){
      const user = await this.tokensRepository.fetchById(id);
      console.log(user);
      const {cloudId}=user[0].params;
      return cloudId;
    }
  async requestAgain(refreshToken,id){
    
    const data = await this.revokeTokens(refreshToken);
    console.log(data);
    const { access_token } = data;
    const {refresh_token} = data;
        const accessTokenDTO = { 
          userId:id,
          token: access_token,
          type: "access_token",
          service:"Jira"
        };
        const refreshTokenDTO = {
          userId:id,
          token: refresh_token,
          type: "refresh_token",
          service:"Jira"
        };
        // Error coming here
        const users= await this.tokensRepository.fetchById(id);
        console.log(users);
        if(users.length >= 2){
          await this.tokensRepository.update(accessTokenDTO);
          await this.tokensRepository.update(refreshTokenDTO);
          console.log("Updated")
          return;
        }
        await this.tokensRepository.add(accessTokenDTO);
        await this.tokensRepository.add(refreshTokenDTO);
        return;
  }
  async getUser(userId) {
    const {accessToken, refreshToken} = await this.getTokens(userId);
    const url=`https://api.atlassian.com/oauth/token/accessible-resources`;
    const params={};
    const headers={
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`
    }
    try {
      const user = await get(url,params,headers);
      console.log(user)
      const cloudId=user.data[0].id;
      const jiraURL=user.data[0].url;
      const jiraUserName=user.data[0].name;
      const jiraUserInfo = {
        cloudId,
        jiraURL,
        jiraUserName,
      }
      const jiraParams=JSON.stringify(jiraUserInfo);
      const tokenDT0={
        userId,
        token:accessToken,
        type:"access_token",
        service:"Jira",
        params:jiraParams
      }  
      const refreshTokenDTO={
        userId,
        token:refreshToken,
        type:"refresh_token",
        service:"Jira",
        params:jiraParams        
      }
       await this.tokensRepository.update(tokenDT0);   
       await this.tokensRepository.update(refreshTokenDTO);   
      console.log(user.data);
      return user.data;
    }catch (error) {
   const  status=error.response.data.message;
   if (status === "Unauthorized") {   
     console.log(status)  
    await this.requestAgain(refreshToken,userId);
    await this.getUser(userId);
  }
  }
}

  async getAllprojects(userId) {
    const id= await this.getCloudId(userId);
    const {accessToken, refreshToken} = await this.getTokens(userId);

    const url=`https://api.atlassian.com/ex/jira/${id}/rest/api/3/project`;
    const params={};
    const headers={
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`
    }
    try {
      const project = await get(url,params,headers);
      return project.data;
      
    } catch (e) {
      const status = e.response.data.message;
      if (status === "Unauthorized") {      
        await this.requestAgain(refreshToken,userId);
        await this.getAllprojects(id,userId);
      }
    }
  }
  async createProject(dto,userId) {
    const id= await this.getCloudId(userId);
    const {accessToken, refreshToken} = await this.getTokens(userId);
    const url=`https://api.atlassian.com/ex/jira/${id}/rest/api/3/project`;
    const params={};
    const headers={
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`
    }
    try {
      const projectInfo = dto.getProject();
      const project = await post(url, projectInfo, params, headers);
      return project.data;
    } catch (e) {
      const status = e.response.data.message;
      if (status === "Unauthorized") {    
        await this.requestAgain(refreshToken,userId);
        await this.createProject(dto,userId);
      }
    }
  }
  async getProjectById(userId,projectId) {
    const id= await this.getCloudId(userId);
    const {accessToken, refreshToken} = await this.getTokens(userId);
    const url=`https://api.atlassian.com/ex/jira/${id}/rest/api/3/project/${projectId}`;
    const params={};
    const headers={
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`
    }
    try {
      const project = await get(url,params,headers);
      return project.data;
    } catch (e) {
      const status = e.response.data.message;
      if (status === "Unauthorized") {    
        await this.requestAgain(refreshToken,userId);
        await this.getProjectById(userId,id,projectId);
      }
    }
  }
  async updateProject(userId, dto,projectId) {
    const id= await this.getCloudId(userId);
    const {accessToken, refreshToken} = await this.getTokens(userId);
    const url=`https://api.atlassian.com/ex/jira/${id}/rest/api/3/project/${projectId}`;
    const params={};
    const headers={
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`
    }
    try {
      const projectInfo = dto.getProject();
      const project = await put(url, projectInfo, params, headers);
      return project.data;
    } catch (e) {
      const status = e.response.data.message;
      if (status === "Unauthorized") {    
        await this.requestAgain(refreshToken,userId);
        await this.updateProject(userId,dto,projectId);
      }
    }
  }
  async deleteProject(userId,projectId) {
    const id= await this.getCloudId(userId);
    const {accessToken, refreshToken} = await this.getTokens(userId);
    const url=`https://api.atlassian.com/ex/jira/${id}/rest/api/3/project/${projectId}`;
    const params={};
    const headers={
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`
    }
    try {
      const project = await del(url, params, headers);
      return project.data;
    } catch (e) {
      const status = e.response.data.message;
      if (status === "Unauthorized") {
        await this.requestAgain(refreshToken,userId);
        await this.deleteProject(userId,id,projectId);
      }
      return status;
    }
  }
  async createIssue(userId,dto) {
    const id= await this.getCloudId(userId);
    const {accessToken, refreshToken} = await this.getTokens(userId);
    const url=`https://api.atlassian.com/ex/jira/${id}/rest/api/3/issue`;
    const params={};
    const headers={
      Accept: 'application/json',
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
    const data=dto.getIssue();
    try {
      const issue = await post(url,data,params, headers);
      return issue.data;
    } catch (e) {
      const status = e.response.data.message;
      if (status === "Unauthorized") {
        await this.requestAgain(refreshToken,userId);
        await this.createIssue(userId,dto);
      }
      return status;
    }
  }
  async getIssueById(userId,issueId) {
    const id= await this.getCloudId(userId);
    const {accessToken, refreshToken} = await this.getTokens(userId);
    const url=`https://api.atlassian.com/ex/jira/${id}/rest/api/3/issue/${issueId}`;
    const params={};
    const headers={
      Accept: 'application/json',
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
    try {
      const issue = await get(url,params, headers);
      return issue.data;
    } catch (e) {
      const status = e.response.data.message;
      if (status === "Unauthorized") {
        await this.requestAgain(refreshToken,userId);
        await this.getIssueById(userId,dto);
      }
      return status;
    }
  }
  async updateIssue(userId,issueId,dto) {
    const id= await this.getCloudId(userId);
    const {accessToken, refreshToken} = await this.getTokens(userId);
    const url=`https://api.atlassian.com/ex/jira/${id}/rest/api/3/issue/${issueId}`;
    const params={};
    const headers={
      Accept: 'application/json',
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
    const data=dto.getIssue();
    try {
      const issue = await put(url,data,params, headers);
      return issue.data;
    } catch (e) {
      const status = e.response.data.message;
      if (status === "Unauthorized") {
        await this.requestAgain(refreshToken,userId);
        await this.updateIssue(userId,issueId,dto);
      }
      return status;
    }
  }


}
module.exports = Jira;
