const express = require("express");

const app = express();

function checkIfKnownPerson(req, res, next) {
  if (req.query.key === "42") {
    next();
  } else {
    res.send("You are not a known person");
  }
}

function sayHello(req, res) {
  res.send("Hello");
}

function welcomeInside(req, res) {
  res.send("welcome to the sea");
}

app.get("/public", sayHello);
app.get("/private", checkIfKnownPerson, welcomeInside);

app.listen(4116, () => {
  console.log("Example app listening on http://localhost:4116");
});
