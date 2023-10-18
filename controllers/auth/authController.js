const User = require("../../models/user");
const passport = require("passport");
const { genPassword } = require("../../utils/passwordUtils");

module.exports.register = async (req, res) => {
	try {
		const username = req.body.username;
		const password = req.body.password;
		const salt_hash = genPassword(password);
		await User.insertMany({
			username: username,
			salt: salt_hash.salt,
			hash: salt_hash.hash,
		});
		res.status(201).send("Registered Successfully!");
	} catch (error) {
		res.status(409).send("User already exists\n" + error.message);
	}
};

module.exports.login = passport.authenticate("local", {
	failureRedirect: "login-failure",
	successRedirect: "login-success",
});

module.exports.login_failure = (req, res) => {
	res.status(403).send("Username or Password Incorrect");
};

module.exports.login_success = (req, res) => {
	res.redirect("/auth/logged-in");
};

module.exports.logged_in = (req, res) => {
	if (req.isAuthenticated()) {
		res.status(200).send("You are logged in!");
	} else res.status(403).send("Login again!");
};

module.exports.logout = (req, res) => {
	if (req.isAuthenticated()) {
		req.logout((error) => {
			if (error) res.status(400).send("Error in logout!\n" + error);
		});
		res.status(200).send("Logged out successfully!");
	} else res.status(403).send("Login again!");
};
