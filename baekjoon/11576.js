//Base Conversion

const question = `30 8
3
1 0 1`;

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString().trim()
    : question
).split("\n");

let decimal = 0,
  result = [];
const [A, B] = input[0].split(" ");
const len = Number(input[1]) - 1;

input[2].split(" ").map((str, idx) => {
  decimal += Math.pow(Number(A), len - idx) * Number(str);
});

while (decimal !== 0) {
  result.push(decimal % Number(B));
  decimal = Math.floor(decimal / Number(B));
}
console.log(result.reverse().join(" "));
