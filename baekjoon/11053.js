//50. 가장 긴 증가하는 부분 수열

const question = `11
10 20 10 30 20 50 60 40 50 70 80`; //4

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
const len = Number(input[0]);
const sequence = input[1].split(' ').map(Number);
// console.log(sequence);
const dp = Array(len).fill(1);
let result = 0;

for (let i = 0; i < len; i++) {
  let count = 1;
  for (let j = 0; j < i; j++) {
    // console.log('i', i, sequence[i]);
    // console.log('j', j, sequence[j]);
    if (sequence[i] > sequence[j] && count <= dp[j]) {
      count = dp[j] + 1;
    }
    // console.log('count', count);
  }

  if (dp[i] < count) {
    dp[i] = count;
  }
  // console.log('dp', dp);
  if (result < count) {
    result = count;
  }
}
console.log(result);
