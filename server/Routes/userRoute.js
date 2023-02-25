const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user.controller")

router.post("/users/register", userController.register);

router.post("/users/login", userController.login);

module.exports = router;