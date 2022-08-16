const express = require("express")
const router = express.Router({mergeParams: true})

const adminController = require("../Controllers/Admin")

router.post("/", adminController.addAdmin)
router.put("/:adminId", adminController.updateAdmin)
router.get("/:adminId", adminController.findAdmin)
router.get("/", adminController.getAdmins)
router.delete("/:adminId", adminController.deleteAdmin)


module.exports = router