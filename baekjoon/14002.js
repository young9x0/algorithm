//51. 가장 긴 증가하는 부분 수열4

const question = `12
10 20 10 30 20 50 70 20 30 70 80 90`;
// 4
// 10 20 30 50

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
const len = Number(input[0]);
const sequence = input[1].split(' ').map(Number);

const dp = Array(len).fill(1);
const temp = [];

for (let i = 0; i < len; i++) {
  let max = 1;
  let maxIndex = -1;

  for (let j = 0; j < i; j++) {
    // console.log(sequence[i], sequence[j]);
    if (sequence[i] > sequence[j] && max <= dp[j]) {
      max = dp[j] + 1;
      maxIndex = j;
    }
  }

  dp[i] = max;
  temp[i] = maxIndex !== -1 ? temp[maxIndex].concat(sequence[i]) : [sequence[i]];
  // console.log(temp);
}

const maxLen = Math.max(...dp);
// console.log(dp.indexOf(maxLen));
console.log(String(maxLen));
console.log(temp[dp.indexOf(maxLen)].join(' '));
