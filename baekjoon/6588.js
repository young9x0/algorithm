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

const result = [];

input.map((num, index) => {
  result[index] = [];
  if (index < input.length - 1) {
    // console.log("num", num);
    const int = Number(num);
    let isPrimeNumber = Array(int + 1).fill(true);
    isPrimeNumber[0] = isPrimeNumber[1] = false;

    for (
      let multipleIdx = 2;
      multipleIdx <= Math.ceil(Math.sqrt(int));
      multipleIdx++
    ) {
      let count = 2;
      while (multipleIdx * count <= int) {
        // console.log("multipleIdx", multipleIdx);
        // console.log("count", count);
        if (isPrimeNumber[multipleIdx * count]) {
          isPrimeNumber[multipleIdx * count] = false;
        }
        count++;
      }
    }
    // result.push(`${num} = ${pn} + ${num-pn}`);
    // console.log("2 isPrimeNumber", isPrimeNumber);
    isPrimeNumber.map((pn, idx) => {
      if (!result[index].length) {
        if (pn && isPrimeNumber[int - idx]) {
          return result[index].push(`${num} = ${idx} + ${int - idx}`);
        }
      }
    });
    if (!result[index].length)
      result[index].push(`Goldbach's conjecture is wrong.`);
  }
});
console.log(result.join("\n"));
