const express = require("express");
const env = require("dotenv");
env.config();
const app = express();
app.get("/", (req, res) => {
  res.send("<h1> Working  container</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port", port);
});
