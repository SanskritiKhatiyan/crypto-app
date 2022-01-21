const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const protect = require("../controller/protectController");
const sendEmail = require("../utils/email");

require("../db/connection");
const User = require("../model/userModel");

/*<============================= Sign-Up route ===============================>*/
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

    // If exist
    if (userLogin) {
      // Check password are same
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();

      // Storing JWT Token in Cookie
      const exp = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
      res.cookie("jwt", token, {
        expires: exp,
        httpOnly: true,
      });

      // Getting user name
      const userName = userLogin.name;

      // If password not same
      if (!isMatch) {
        return res
          .status(401)
          .json({ error: "Invalid Credentials!", statusCode: 401 });
      } else {
        res.status(200).json({
          message: "User Login Successfully!",
          statusCode: 200,
          name: userName,
        });
      }
    } else {
      res.status(400).json({ error: "User not found! ☹☹", statusCode: 400 });
    }
  } catch (err) {
    console.log(err);
  }
});

// Get the data
router.get("/watch-list", protect, async (req, res) => {
  try {
    const userEmail = req.validUser.email;
    const user = await User.findOne({ email: userEmail });
    const coinsArray = user.coins;

    res.status(200).json({
      status: "success",
      message: "OK",
      coinsArray,
    });
  } catch (err) {
    console.log(err);
  }
});

// Sotore the conID in Database
router.post("/storeCoinID", protect, async (req, res) => {
  try {
    // Get the user based on email id
    const userEmail = req.validUser.email;
    const user = await User.findOne({ email: userEmail });

    const { coinName } = req.body;

    if (coinName) {
      const isCoinIDPresent = await User.findOne({
        coins: { $elemMatch: { coinName } },
        email: userEmail,
      });

      if (isCoinIDPresent) {
        return res.status(200).json({
          status: "success",
          message: "CoinID is already present.",
        });
      } else {
        user.coins = user.coins.concat({ coinName });
        await user.save();
      }
    }

    res.status(201).json({
      status: "success",
      message: "User Coin ID Is Added Successfully! 😀😀 ",
    });
  } catch (err) {
    console.log(err);
  }
});

// Remove data from database
router.put("/removeCoin", protect, async (req, res) => {
  try {
    const userEmail = req.validUser.email;
    const user = await User.findOne({ email: userEmail });

    const { coinID } = req.body;

    const findCoinID = await User.findOneAndUpdate(
      { email: userEmail },
      { $pull: { coins: { coinName: coinID } } }
    );
    user.save();
    const userUpdatedCoinArray = user.coins;

    res.status(200).json({
      status: "success",
      message: "Coin removed!",
      userUpdatedCoinArray,
    });
  } catch (err) {
    console.log(err);
  }
});

// Logged out the uesr
router.get("/logout", protect, async (req, res) => {
  try {
    res.clearCookie("jwt");
    await req.validUser.save();

    res.status(200).json({
      status: "success",
      message: "User Logged Out Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: "Something went wrong.",
    });
  }
});

// Forgot Password Functionality
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
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/resetPassword/${resetToken}`;

  const message = `Forgot you passsword? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token {valid for 10 min}",
      message,
    });

    req.status(200).json({
      status: "success",
      message: "Token send to email",
    });
  } catch (err) {
    await user.save({ validateBeforeSave: false });

    return res.status(500).json({
      message: "There was an error sending the email. Try again later.",
    });
  }
});

// Reset Password Functionality
router.patch("/resetPassword/:token", async (req, res, next) => {
  // 1 Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2 If the token not expired, and there is user, set the new password
  if (!user) {
    return res.status(400).json({
      status: "fail",
      message: "Token is invaild or has expired",
    });
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3 Log the user in, Send JWT
  let token = await user.generateAuthToken();
  res.status(200).json({
    status: "success",
    token,
  });
});

module.exports = router;
