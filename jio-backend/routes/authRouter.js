const express = require("express");
const {
  signupController,
  loginController,
} = require("../controller/authController");
const authRouter = express.Router();

//Route: /api/auth/signup
authRouter.post("/signup", signupController);
authRouter.post("/login", loginController);

module.exports = authRouter;
