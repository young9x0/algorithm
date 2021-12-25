//소수 구하기

const question = `3 16`;
// 3
// 5
// 7
// 11
// 13

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

let result = "";

const [startIdx, lastIdx] = input[0].split(" ").map(Number);

for (let num = startIdx; num <= lastIdx; num++) {
  for (let j = 2; j <= num; ) {
    if (j === num) {
      result += num + "\n";
      break;
    } else if (num % j === 0 && num !== j) {
      break;
    }
    j++;
  }
}
// console.log("inputs", inputs);

console.log(result);

// console.log("factors", factors.filter((list) => list[0] > startIdx).join("\n"));
// console.log(result);
