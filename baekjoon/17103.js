//골드바흐 파티션

const question = `5
6
8
10
12
100`;
// 1
// 1
// 2
// 1
// 6

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString().trim()
    : question
).split("\n");
const result = [];

input.map((str, idx) => {
  if (idx > 0) {
    const num = Number(str);
    const isPrime = Array(num).fill(1);
    isPrime[0] = isPrime[1] = 0;

    for (let i = 2; i < num; i++) {
      for (let multipleIdx = 2; i * multipleIdx < num; multipleIdx++) {
        isPrime[i * multipleIdx] = 0;
      }
    }
    // console.log(isPrime);
    // console.log(num);
    let count = 0;
    isPrime.filter((prime, index) => {
      if (!!prime && num - index > 1) {
        !!isPrime[num - index] && (count++, (isPrime[num - index] = 0));
      }
      isPrime.length - 1 === index && result.push(count);
    });
  }
});
console.log(result.join("\n"));
