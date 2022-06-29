const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const protect = require("./controller/protectController");
const path = require("path");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "../backend/config.env" });
}
// Requiring Database Connection
require("./db/connection");
const User = require("./model/userModel");

app.use(express.json());
app.use(cookieParser());

// Requiring Router
app.use(require("./routes/authentication"));

//  Routing
// app.get("/", (req, res) => {
//   res.send(`Hello world from the server route js`);
// });

// app.get("/news", (req, res) => {
//   res.send(`Hello News World from server.`);
// });

// app.get("/coins", (req, res) => {
//   res.send(`Hello Coins World from server.`);
// });

app.use(express.static(path.join(__dirname, "../backend/frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../backend/frontend/build/index.html"));
});

const port = process.env.PORT || 4000;
const server = app.listen(port, (err) => {
  if (err) {
    return console.log("Error: ", err);
  }
  console.log(`Server is Up and running on PORT: ${port}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
