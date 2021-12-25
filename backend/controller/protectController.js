const { Promisify, promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const tokenVarification = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET
    );

    // tokens: token,
    const validUser = await User.findOne({
      _id: tokenVarification._id,
    });

    if (!validUser) {
      throw new Error("User not found!");
    }

    req.token = token;
    req.validUser = validUser;

    next();
  } catch (error) {
    res.status(401).send("Unauthorized: No token provided.");
  }
};


module.exports = protect;
