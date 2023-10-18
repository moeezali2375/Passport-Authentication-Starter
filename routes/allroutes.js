const express = require("express");
const router = express.Router();

const authRouter = require("./auth/authRoutes");

router.get("/", (req, res) => {
	res.send("<h1>Hello</h1>");
});

router.use("/auth", authRouter);

module.exports = router;
