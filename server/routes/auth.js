const express = require("express");
const {body} = require("express-validator")
const route = express.Router();

const authController = require("../controller/auth");

route.post("/auth",[
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength(6).withMessage("Invalid password")

] ,authController.postLogin);
route.post("/register", authController.postRegister);

module.exports = route;
