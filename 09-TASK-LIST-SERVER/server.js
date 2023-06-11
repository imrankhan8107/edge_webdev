const express = require("express");
// const tasks = require("./tasks.json");
const fs = require("fs");

const app = express();

app.use(express.json());

// Read JSON data from a file
const readFile = (filePath) => {
  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
};

// Write JSON data to a file
const writeFile = (filePath, data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData, "utf-8");
    console.log("File write successful.");
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

// Example usage
const filePath = "tasks.json";

// Read data from the JSON file
const tasks = readFile(filePath).tasks;
console.log("Read tasks:", tasks);


app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;
  res.send(tasks[id - 1]);
});

app.post("/tasks", (req, res) => {
  const data = req.body;
  tasks.push(data.tasks);
  writeFile(filePath, {"tasks":tasks});
  res.send("Post request received");
});

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  tasks.splice(id - 1, 1);
  writeFile(filePath, {"tasks":tasks});
  res.send("Delete request received");
})

app.listen(3000, () => {
  console.log("Server is running on address http://127.0.0.1:3000");
});
