const express = require("express");
const routes = require("./routes")

const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json())
app.use(routes)

app.listen(8000, () => console.log("Server on: http://localhost:8000"))