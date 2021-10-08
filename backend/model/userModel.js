const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name..."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email..."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email..."],
  },
  password: {
    type: String,
    required: [true, "Please provide a password..."],
    minlength: 8,
    // select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password..."],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
