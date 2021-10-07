const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello World from Server 🔥🔥🔥`);
});

module.exports = app;
