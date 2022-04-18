//52. 연속합

const question = `10
10 -4 3 1 5 6 -35 12 21 -1`; //33
// const question = `10
// 2 1 -4 3 4 -4 6 5 -5 1`; //14
// const question = `5
// -1 -2 -3 -4 -5`; //-1

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
const len = Number(input[0]);
const sequence = input[1].split(' ').map(Number);
// console.log(sequence);
const DP = [];

for (let i = 0; i < len; i++) {
  DP[i] = sequence[i];
  //   console.log(DP[i], DP[i - 1] + sequence[i]);
  if (DP[i] < DP[i - 1] + sequence[i]) {
    DP[i] = DP[i - 1] + sequence[i];
  }
}
console.log(Math.max(...DP));
