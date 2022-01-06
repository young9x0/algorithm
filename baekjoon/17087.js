// 숨바꼭질6
// N(1 ≤ N ≤ 105)과 S(1 ≤ S ≤ 109)
const question = `3 3
1 7 11`; //2
// const question = `3 81
// 33 105 57`; //24
// const question = `1 1
// 1000000000`; //999999999

// console.time('test')
const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8").toString()
    : question
).split("\n");

let result = 0;
const [N, S] = input[0].split(" ");
const Ds = input[1].split(" ").map((pos) => Math.abs(S - pos));

if (N < 2) {
  result = Ds[0];
} else {
  Ds.map((D, idx) => {
    if (Ds[idx + 1] && (!result || result > findGCD(D, Ds[idx + 1]))) {
      result = findGCD(D, Ds[idx + 1]);
    }
  });
}

function findGCD(fir, sec) {
  // console.log(fir, sec, fir % sec);
  if (sec === 0) {
    return fir;
  } else {
    return findGCD(sec, fir % sec);
  }
}
console.log(result);
