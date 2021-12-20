const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const protect = require("../controller/protectController");

require("../db/connection");
const User = require("../model/userModel");

/*<============================= Sign-Un route ===============================>*/
router.post("/sign-up", async (req, res) => {
  // Getting the data from req.body
  const { name, email, password, passwordConfirm } = req.body;

  // Validate for all fields
  if (!name || !email || !password || !passwordConfirm) {
    return res
      .status(422)
      .json({ error: "Please fill the field properly", statusCode: 422 });
  }

  try {
    // Check that user exist or not with the same email id
    const userExist = await User.findOne({ email });

    // if exists
    if (userExist) {
      return res
        .status(422)
        .json({ error: "Email is already exist", statusCode: 422 });
    } else if (password != passwordConfirm) {
      return res
        .status(422)
        .json({ error: "Password are not matching", statusCode: 422 });
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
        res
          .status(201)
          .json({ message: "User registered Successfully!", statusCode: 201 });
      } else {
        res
          .status(500)
          .json({ error: "Failed to registered user.", statusCode: 500 });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

/*<============================= Sign-In route ===============================>*/
router.post("/sign-in", async (req, res) => {
  try {
    let token;
    // Getting data from req.body
    const { email, password } = req.body;

    // Validate for all required fields
    if (!email || !password) {
      return res
        .status(422)
        .json({ error: "Please Fill all the fields", statusCode: 422 });
    }

    // Check if user exist with email id
    const userLogin = await User.findOne({ email });

    // For displaying name
    // console.log(userLogin.name);
    // var userName = userLogin.name;

    // If exist
    if (userLogin) {
      // Check password are same
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();

      // Storing JWT Token in Cookie
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        httpOnly: true,
      });

      // If password not same
      if (!isMatch) {
        return res
          .status(400)
          .json({ error: "Invalid Credentials!", statusCode: 400 });
      } else {
        res.status(200).json({
          message: "User Login Successfully!",
          statusCode: 200,
          // name: userName,
        });
        // console.log(currentuser);
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials!", statusCode: 400 });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/watch-list", protect, (req, res) => {
  res.send(req.validUser);
});

router.post("/forgotPassword", async (req, res, next) => {
  // 1 Get user base on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res
      .status(404)
      .json({ message: "There is no user with email address" });
  }

  // 2 Generate the random token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3 Send it to the user email
});
router.post("/resetPassword", (req, res, next) => {});

module.exports = router;
