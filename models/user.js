const mongoose = require("mongoose");

//schema validate mongoose
const userSchema = new mongoose.Schema({
  userID: String,
  name: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
