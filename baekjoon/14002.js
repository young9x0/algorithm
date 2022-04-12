//가장 긴 증가하는 부분 수열4

const question = `6
10 20 10 30 20 50`;
// 4
// 10 20 30 50

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
const len = Number(input[0]);
const sequence = input[1].split(' ').map(Number);
let result = [];

const dp = Array(len).fill(1);

for (let i = 0; i < len; i++) {
  let count = 1;
  const temp = [];
  for (let j = 0; j < i; j++) {
    if (sequence[i] > sequence[j] && count <= dp[j]) {
      // console.log(sequence[i], sequence[j]);
      if (temp.length > 0) {
        const hasSameInt = temp.some((int) => int === sequence[j]);

        if (!hasSameInt) {
          temp.push(sequence[j]);
        }
      } else {
        temp.push(sequence[j]);
      }
      if (count <= dp[j]) {
        count = dp[j] + 1;
      }
    }
  }

  temp.push(sequence[i]);
  Math.max(...dp) < count && (result = temp);
  dp[i] = count;

  // console.log(temp);
}

console.log(result.length + '\n' + result.join(' '));
