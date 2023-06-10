const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));  //enable reading of urlencoded data in posts request
app.use(express.json());  //enable reading of json data in posts request

app.get("/", (req, res) => {
  console.log(req.method, req.url);
  res.send("Hello World");
});

app.get("/abcd", (req, res) => {
  res.send({
    a: 10,
    b: true,
    c: "ABCD",
    d: {
      p: 10,
      q: "Hello",
    },
  });
});

app.post("/abc", (req, res) => {
  console.log(req.body);
  res.send("POST request to the homepage");
});
// https://www.google.com/search?q=nodejs  => although path is same,based on the q server is sending different data
// after '?', if we write key=value pairs, then those (key, value) pairs get into query object, if no key=value pairs, then query object is empty
app.get("/greet", (req, res) => {
  console.log(req.query);
  var name = req.query.name;
  name ? res.send("Hello " + name) : res.send("Hello Guest");
});

app.get('/arr', (req, res) => {
  res.send([1, 2, 3, 4, 5]);
})

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
