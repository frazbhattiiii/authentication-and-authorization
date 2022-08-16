const express = require("express")
const router = express.Router({mergeParams: true})

const projectController = require("../Controllers/Project")

router.post("/", projectController.addProject)
router.put("/:projId", projectController.updateProject)
router.get("/:projId", projectController.findProject)
router.get("/", projectController.getProjects)
router.delete("/:projId", projectController.deleteProject)


module.exports = router