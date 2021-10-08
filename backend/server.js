const app = require("./app");

const port = process.env.PORT || 4000;
const server = app.listen(port, (err) => {
  if (err) {
    return console.log("Error: ", err);
  }
  console.log(`Server is Up and running on PORT: ${port}`);
});
