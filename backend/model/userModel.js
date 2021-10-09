const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Creating an instance of userSchema for Hashing the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = await bcrypt.hash(this.passwordConfirm, 12);
  }
  next();
});

// Generating jsonwebtoken
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
