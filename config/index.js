require("dotenv").config();

const PORT = process.env.PORT;
const DB_STRING = process.env.DB_STRING;
const SECRET = process.env.SECRET;
const CLIENT = process.env.CLIENT;
module.exports = {
	PORT,
	DB_STRING,
	SECRET,
	CLIENT,
};
