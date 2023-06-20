const express = require("express");

const route = express.Router();

const teacherList = [
  { name: "imran", topic: "graphs" },
  { name: "gaurav", topic: "DP" },
  { name: "srusti", topic: "OOP" },
  { name: "imranX", topic: "React" },
  { name: "sahil", topic: "design" },
];

route.get("/", (req, res) => {
  res.send(teacherList);
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.status(400).send("Invalid id");
  } else if (id < 0 || id >= teacherList.length) {
    return res.status(404).send("No student found with id " + id);
  } else {
    res.send(teacherList[id]);
  }
});

module.exports = route;