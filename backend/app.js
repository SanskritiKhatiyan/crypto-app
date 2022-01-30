const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const protect = require("./controller/protectController");

// Requiring Database Connection
require("./db/connection");
const User = require("./model/userModel");

app.use(express.json());
app.use(cookieParser());

// Requiring Router
app.use(require("./routes/authentication"));

//  Routing
app.get("/", (req, res) => {
  res.send(`Hello world from the server route js`);
});

app.get("/news", (req, res) => {
  res.send(`Hello News World from server.`);
});

app.get("/coins", (req, res) => {
  res.send(`Hello Coins World from server.`);
});

app.all("*", (req, res, next) => {
  res.send(`Can't find ${req.originalUrl} on this server!`);
  next();
});

module.exports = app;
