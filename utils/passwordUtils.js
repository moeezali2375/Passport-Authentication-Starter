const crypto = require("crypto");

//! login
function validatePassword(password, hash, salt) {
	const hashVerify = crypto
		.pbkdf2Sync(password, salt, 10000, 64, "sha512")
		.toString("hex");
	return hash === hashVerify;
}
//! register
function genPassword(password) {
	const salt = crypto.randomBytes(32).toString("hex");
	const genHash = crypto
		.pbkdf2Sync(password, salt, 10000, 64, "sha512")
		.toString("hex");
	return {
		salt: salt,
		hash: genHash,
	};
}

module.exports.validatePassword = validatePassword;
module.exports.genPassword = genPassword;
