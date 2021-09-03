const express = require("express");
const router = express.Router();
const userService = require("./user.service.js"); 

router.post("/register", userService.registerUser);
router.get("/login", userService.loginUser);
module.exports = router;

