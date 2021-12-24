//최대공배수

const question = `3
1 45000
6 10
13 17`;
// 45000
// 30
// 221

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");
input.shift();
const result = [];

input.map((splited) => {
  const factors = [[], []],
    [fir, sec] = splited.split(" ").map(Number);
  let limit = 1;
  if (fir < sec) {
    limit = fir;
  } else {
    limit = sec;
  }
  for (let i = 1; i <= limit; i++) {
    fir % i === 0 && factors[0].push(i);
    sec % i === 0 && factors[1].push(i);
  }
  // console.log("factors", factors);
  let largeFactorIdx = 0,
    GCF = "";
  if (factors[0].length < factors[1].length) {
    largeFactorIdx = 1;
  }
  factors[largeFactorIdx].map((el) => {
    factors[!largeFactorIdx ? 1 : 0].map((other) => {
      if (el === other) GCF = el;
    });
  });
  // console.log("GCF", GCF);
  result.push((fir * sec) / GCF);
});

console.log(result.join("\n"));
