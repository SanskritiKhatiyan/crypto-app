const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
// var wcoin = require("./model/coin");

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

// var request = require('request-promise');
// // var baseURI = 'example';

// module.exports = {

// product : (req, res)=>{
//     request({
//         method : 'GET',
//         url : "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=16&page=1&sparkline=false"
//     })
//     .then((resp)=>{
//         console.log('Product list : ', resp);
//         res.send(resp).save();
//     })
//   }
// }
// .then((resp)=>{
//   //I assume that resp is an array of products here
// console.log('Product list : ', resp);

// //Go over your product list and save them
// for (var wcoin of resp) {
// var w = new wcoin(wcoin);
// w.save();
// }

//   //OR
// wcoin.insertMany(resp);

// res.send(resp);
// })
module.exports = app;
