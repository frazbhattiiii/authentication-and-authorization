import jiraController from "../Controllers/Jira";
const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/authUrl", jiraController.authUrl);
router.get("/token", jiraController.token);
router.get("/getUser", jiraController.getUser);
router.get("/project", jiraController.getAllprojects);
router.post("/project", jiraController.createProject);
router.get("/project/:projectId", jiraController.getProjectById);
router.put("/project/:projectId", jiraController.updateProject);
router.delete("/project/:projectId", jiraController.deleteProject);
router.post("/issue", jiraController.createIssue);
router.get("/issue/:issueId", jiraController.getIssueById);
router.put("/issue/:issueId", jiraController.updateIssue);

module.exports = router;
