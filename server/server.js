const express = require("express");
const app = express();
const cors = require("cors");
// process.env's config.env file will contain PORT & other private credentials.
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())

// use routes...
// app.use(require("./routes/record"));

// get driver connection (from mongodb ATLAS cloud :^))
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  // No errors, we are good to go!
  console.log(`Server is running on port: ${port}`);
});