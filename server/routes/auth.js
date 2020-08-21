const express = require("express");
const { body } = require("express-validator");
const route = express.Router();

const authController = require("../controller/auth");

route.post(
  "/auth",
  [
    body("email")
      .isEmail()
      .withMessage("Invalid email"),
    body("password")
      .isLength(6)
      .withMessage("Invalid password")
  ],
  authController.postLogin
);
route.post(
  "/register",
  [
    body("email")
      .isEmail()
      .trim()
      .withMessage("Invalid email"),
    body("password")
      .isLength(6)
      .withMessage("invalid password"),
    body("confirmPassword")
      .isLength(6)
      .withMessage("Invalid confirm"),
    body("name")
      .not()
      .isEmpty()
      .withMessage("Name is required")
    //checking validation for register
  ],
  authController.postRegister
);
route.post("/logout", authController.postLogout);

module.exports = route;
