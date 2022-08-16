const express = require("express")
const router = express.Router({mergeParams: true})

const organizationController = require("../Controllers/Organization")

router.post("/", organizationController.addOrganization)
router.put("/:orgId", organizationController.updateOrganization)
router.get("/:orgId", organizationController.findOrganization)
router.get("/", organizationController.getOrganizations)
router.delete("/:orgId", organizationController.deleteOrganization)


module.exports = router