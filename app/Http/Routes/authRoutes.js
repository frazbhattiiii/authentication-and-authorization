const express = require("express")
const router = express.Router({mergeParams: true})
import authController from "../Controllers/Auth";

router.post('/register', authController.register);
router.post('/login', authController.login)

module.exports = router