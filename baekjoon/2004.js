//조합 0의 개수
//수학에서 조합은 서로 다른 n개의 원소를 가지는 어떤 집합에서 순서에 상관없이 r개의 원소를 선택하는 것

// const question = `25 12`;
const question = `5 0`;

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

const [total, pick] = input[0].split(" ").map(Number);
// const [total, pick] = input[0].split(" ");

let count = 0;

for (let i = 5; i <= total; i *= 5) {
  if (parseInt(total / i)) {
    // console.log("1", parseInt(total / i));
    count += parseInt(total / i);
  }
  if (parseInt(pick / i)) {
    // console.log("2", parseInt(pick / i));
    count -= parseInt(pick / i);
  }
  if (pick > 0 && parseInt((total - pick) / i)) {
    // console.log("3", parseInt((total - pick) / i));
    count -= parseInt((total - pick) / i);
  }
}

console.log(count);
