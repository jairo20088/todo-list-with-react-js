const express = require("express");
const route = express.Router();

const authController = require("../controller/auth");

route.post("/auth", authController.postLogin);
route.post("/register", authController.postRegister);

module.exports = route;
