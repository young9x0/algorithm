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

let result = 0,
  GCD = 0;
input.map((str, idx) => {
  if (idx > 0) {
    const splited = str.split(" ");
    splited.shift();
    splited.map((nums, index) => {
      for (let i = 0; i < splited.length; i++) {
        splited[i + index] && (result += FindGCD(nums, splited[i + index]));
      }
    });
  }
});

function FindGCD(fir, sec) {
  let limit = 0;
  if (fir > sec) {
    limit = sec;
  } else {
    limit = fir;
  }
  for (let i = 1; i <= limit; i++) {
    if (fir % i === 0 && sec % i === 0) {
      !GCD || (GCD < i && (GCD = i));
    }
  }
  return GCD;
}
