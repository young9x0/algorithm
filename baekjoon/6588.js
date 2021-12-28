//골드바흐의 추측

const question = `8
20
42
0`;
// 8 = 3 + 5
// 20 = 3 + 17
// 42 = 5 + 37
//b-a
//Goldbach's conjecture is wrong.

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").trim()
    : question
).split("\n");

const sortedNums = input.map((list) => Number(list)).sort((a, b) => a - b);

const result = [],
  biggestInt = sortedNums[sortedNums.length - 1];

let isPrimeNumber = Array(biggestInt + 1).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;

for (
  let multipleIdx = 2;
  multipleIdx <= Math.ceil(Math.sqrt(biggestInt));
  multipleIdx++
) {
  let count = 2;
  while (multipleIdx * count <= biggestInt) {
    // console.log("multipleIdx", multipleIdx);
    // console.log("count", count);
    if (isPrimeNumber[multipleIdx * count]) {
      isPrimeNumber[multipleIdx * count] = false;
    }
    count++;
  }
}

// console.log(" isPrimeNumber", isPrimeNumber);

input.map((str, index) => {
  if (index > 0) {
    const num = Number(str);
    result[index - 1] = [];

    isPrimeNumber.map((pn, idx) => {
      if (!result[index - 1].length) {
        if (pn && isPrimeNumber[num - idx]) {
          return result[index - 1].push(`${num} = ${idx} + ${num - idx}`);
        }
      }
    });
    if (!result[index - 1].length)
      result[index - 1].push(`Goldbach's conjecture is wrong.`);
  }
});

console.log(result.join("\n"));
