const express = require("express");

const app = express();

app.use(express.json());

const tasks = [
  "Enroll to scaler",
  "Learn Node.js",
  "Learn Express.js",
  "Get a Job",
  "Get a girlfriend",
];

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.get("/tasks/:id", (req, res) => {
    const id = req.params.id;
    res.send(tasks[id-1]);
});

app.post("/tasks", (req, res) => {
  const data = req.body;
  tasks.push(data.tasks);
  res.send("Post request received");
});

app.listen(3000, () => {
  console.log("Server is running on address http://127.0.0.1:3000");
});