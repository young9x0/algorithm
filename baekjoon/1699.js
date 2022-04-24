//53. 제곱수의 합

// const question = `7`; //4
// const question = `1`; //1
// const question = `4`; //1
const question = `11`; //3
// const question = `13`; //2
// const question = `5`; //2
const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
const number = Number(input[0]); //(1 ≤ N ≤ 100,000)
// const numbers = Array(number + 1)
//   .fill(0)
//   .map((el, i) => i);
const DP = [0, 1];

for (let i = 1; i <= number; i++) {
  DP[i] = DP[i - 1] + 1;
  // console.log(' DP[i]', DP[i]);
  for (let j = 1; j <= Math.sqrt(i); j++) {
    if (i - j ** 2 >= 0 && DP[i - j ** 2] + 1 < DP[i]) {
      DP[i] = DP[i - j ** 2] + 1;
    }
  }
}
console.log(DP[number]);
