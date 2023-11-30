const { default: mongoose } = require("mongoose");

const userSchem = mongoose.Schema({
  name: { type: String, required: true },
});

const userModel = mongoose.model("user", userSchem);

module.exports = userModel;
