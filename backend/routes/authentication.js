const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/connection");
const User = require("../model/userModel");

/*<============================= Sign-Un route ===============================>*/
router.post("/sign-up", async (req, res) => {
  // Getting the data from req.body
  const { name, email, password, passwordConfirm } = req.body;

  // Validate for all fields
  if (!name || !email || !password || !passwordConfirm) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  try {
    // Check that user exist or not with the same email id
    const userExist = await User.findOne({ email });

    // if exists
    if (userExist) {
      return res.status(422).json({ error: "Email is already exist" });
    } else if (password != passwordConfirm) {
      return res.status(422).json({ error: "Password are not matching" });
    } else {
      // Create a new user with all the given fields
      const user = new User({
        name,
        email,
        password,
        passwordConfirm,
      });

      // Save the user in database
      const userRegister = await user.save();
      if (userRegister) {
        res.status(201).json({ message: "User registered Successfully!" });
      } else {
        res.status(500).json({ error: "Failed to registered user." });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

/*<============================= Sign-In route ===============================>*/
router.post("/sign-in", async (req, res) => {
  try {
    // Getting data from req.body
    const { email, password } = req.body;

    // Validate for all required fields
    if (!email || !password) {
      return res.status(400).json({ error: "Please Fill all the fields" });
    }

    // Check if user exist with email id
    const userLogin = await User.findOne({ email });

    // If exist
    if (userLogin) {
      // Check password are same
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // If password not same
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Credentials!" });
      } else {
        res.status(200).json({ message: "User Login Successfully!" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
