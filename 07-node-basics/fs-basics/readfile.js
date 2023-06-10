const fs = require("fs");

fs.readFile("test.txt", (err, data) => {
  if (err) throw err;
  console.log(data); // will return the buffer
  console.log(data.toString());
});
