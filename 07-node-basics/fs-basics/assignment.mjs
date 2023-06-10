import { readFile, writeFile } from "node:fs/promises";
var list = [];
try {
  // const filePath = new URL("1.txt", import.meta.url);
  const contents1 = await readFile("1.txt", { encoding: "utf8" });
  const contents2 = await readFile("2.txt", { encoding: "utf8" });
  const contents3 = await readFile("3.txt", { encoding: "utf8" });
  contents1.split("\r\n").map((item) => list.push(parseInt(item)));
  contents2.split("\r\n").map((item) => list.push(parseInt(item)));
  contents3.split("\r\n").map((item) => list.push(parseInt(item)));
  console.log(list);
} catch (err) {
  console.error(err.message);
}

const sorted_list = list.sort((a, b) => a - b);

try {
  writeFile("sorted_combination.txt", sorted_list.join("\r\n"));
} catch (err) {
  console.log(err);
}
