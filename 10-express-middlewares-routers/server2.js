const express = require("express");

const app = express();

function base64ToAscii(input) {
  return Buffer.from(input, "base64").toString("ascii");
}

function AsciiToBase64(input) {
  return Buffer.from(input, "ascii").toString("base64");
}

// the next argument is a function which when called will terminate the execution of current middleware and call the next middleware in the route

function decodeQuery(req, res, next) {
  console.log(req.query);
  Object.keys(req.query).forEach((key) => {
    req.query[key] = base64ToAscii(req.query[key]);
  });
  console.log(req.query);
  next();
}

function checkForKey(req, res, next) {
  if (req.query.key === "42") {
    next();
  } else {
    res.send("You are not authorized");
  }
}

// decodeQuery happens then the function call happens 
app.get("/public", decodeQuery, (req, res) => {
  res.send("Hello " + req.query.name);
});

// decodeQuery happens then checkForKey happens then function call happens
app.get("/private", decodeQuery, checkForKey, (req, res) => {
  res.send("Hello " + req.query.name + ", welcome to the sea");
});

app.listen(4116, () => {
  console.log("Example app listening on http://localhost:4116");
});
