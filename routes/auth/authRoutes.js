const express = require("express");
const {
	register,
	login,
	login_failure,
	logged_in,
	logout,
	login_success,
} = require("../../controllers/auth/authController");

const authRouter = express.Router();

authRouter.post("/register", register);

authRouter.post("/login", login);

authRouter.get("/login-failure", login_failure);
authRouter.get("/login-success", login_success);

authRouter.get("/logged-in", logged_in);

authRouter.post("/logout", logout);

module.exports = authRouter;
