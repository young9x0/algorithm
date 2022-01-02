//조합 0의 개수
//수학에서 조합은 서로 다른 n개의 원소를 가지는 어떤 집합에서 순서에 상관없이 r개의 원소를 선택하는 것

// const question = `25 12`;
const question = `5 2`; //1676과 다르게 2의 개수가 중요한 예시: totalFiveCount=1, totalTwoCount=0, 0의 개수=0

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

const [total, pick] = input[0].split(" ").map(Number);

function checkCount(num) {
  let i = 0,
    fiveCount = 0,
    twoCount = 0;
  for (i = 5; i <= num; i *= 5) fiveCount += parseInt(num / i);
  for (i = 2; i <= num; i *= 2) {
    twoCount += parseInt(num / i);
  }
  // console.log(num, fiveCount, twoCount);
  return [fiveCount, twoCount];
}

let [totalFive, totalTwo] = checkCount(total);
let [pickFive, pickTwo] = checkCount(pick);
let [restFive, restTwo] = checkCount(total - pick);

let finalFiveCount = totalFive - pickFive - restFive;
let finalTwoCount = totalTwo - pickTwo - restTwo;

console.log(
  finalFiveCount - finalTwoCount > 0 ? finalTwoCount : finalFiveCount
);
