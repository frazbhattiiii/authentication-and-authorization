const app = require("./bootstrap");
const authRoutes = require("../Routes/authRoutes");
const notesRoutes = require("../Routes/notesRoutes");
const organizationRoutes = require("../Routes/organizationRoutes");
const projectRoutes = require("../Routes/projectRoutes");
const jiraRoutes = require("../Routes/jiraRoutes");

const apiVersion = "/api/v1";

app.use(`${apiVersion}/user`, authRoutes);
app.use(`${apiVersion}/user/notes`, notesRoutes);
app.use(`${apiVersion}/user/organization`, organizationRoutes);
app.use(`${apiVersion}/user/project`, projectRoutes);
app.use(`${apiVersion}/jira`, jiraRoutes);

app.use("/ping", (req, res) => {
  return res.status(200).json({
    ping: "pong",
  });
});

app.use("*", (req, res) => {
  return res.status(404).json({
    status: "error",
    message: "not found",
  });
});

module.exports = app;
