const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const URL = process.env.MONGODB_URL;

const connection = mongoose.connect(URL);

module.exports = connection;
