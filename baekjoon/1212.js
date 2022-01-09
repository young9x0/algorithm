// 8진수 2진수

const question = "314"; //11001100

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

let result = "";

input[0].split("").map((str, idx) => {
  const dex = parseInt(str, 8);
  let binary = dex.toString(2);
  // console.log(str, binary);
  while (idx > 0 && binary.length < 3) {
    binary = "0" + binary;
  }
  result += binary;
});
console.log(result);
