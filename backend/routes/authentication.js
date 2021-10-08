const express = require("express");
const router = express.Router();

require("../db/connection");
const User = require("../model/userModel");

router.get("/", (req, res) => {
  res.send(`Hello world from the server route js`);
});

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
    }

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
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
