function greet(name) {
  if (typeof name === "string") {
    return `Hello ${name}`;
  } else {
    return "Hello guest";
  }
}

let a = 10;

module.exports = {
  greet,
  a,
};
