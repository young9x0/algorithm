//GCD 합
//최대공약수(Greatest Common Divisor, GCD)

const question = `3
4 10 20 30 40
3 7 5 12
3 125 15 25
`;
// 70
// 3
// 35

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

let answer = [];

input.map((str, idx) => {
  if (idx > 0) {
    let result = 0,
      biggestFactors = [];
    const splited = str.split(" ").map(Number);

    const len = splited.shift();
    splited.sort((a, b) => a - b);
    console.log("splited", splited);

    for (let i = 2; i <= splited[splited.length - 1]; i++) {
      if (splited[splited.length - 1] % i === 0) {
        biggestFactors.push(i);
      }
    }

    console.log("biggestFactors", biggestFactors);
    splited.map((nums, index) => {
      for (let i = 1; i < splited.length; i++) {
        if (splited[i + index]) {
          if (FindGCD(nums, splited[i + index], biggestFactors) > 1) {
            result += FindGCD(nums, splited[i + index], biggestFactors);
          } else {
            result = len;
          }
        }
      }
    });
    !!result && answer.push(result);
  }
});

function FindGCD(fir, sec, biggestFactors) {
  // console.log("fir", fir);
  // console.log("sec", sec);
  let GCD = 1;

  biggestFactors.map((factor) => {
    if (fir % factor === 0 && sec % factor === 0) {
      console.log(fir, sec, factor, GCD);

      (!GCD || GCD < factor) && (GCD = factor);
    }
  });

  return GCD;
}

console.log(answer.join("\n"));
