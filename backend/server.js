const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

// Connecting application to Hosted DataBase
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB connection successfull🔥`);
  })
  .catch((err) => {
    console.log(`Error connecting in DB ${err}`);
  });

const port = process.env.PORT || 4000;
const server = app.listen(port, (err) => {
  if (err) {
    return console.log("Error: ", err);
  }
  console.log(`Server is Up and running on PORT: ${port}`);
});
