//60. 2156 포도주 시식
//1/8 pm 12:00 - 14:04
const question = `6
6
10
13
9
8
1
1
2
16
8
8
8`;
//33

const fs = require('fs');

const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const splited = inputs.map(Number);
const n = splited[0];

const dp = [];
for (let i = 0; i < n / 3; i++) {
  const idx = i * 3;

  dp[i] = [];
  dp[i][0] = splited[idx + 1] + splited[idx + 2];
  dp[i][1] = splited[idx + 1] + splited[idx + 3];
  dp[i][2] = splited[idx + 2] + splited[idx + 3];
}

// console.log(n, dp);

let temp = Math.max(dp[0][0] + dp[1][0], dp[0][0] + dp[1][1], dp[0][0] + dp[1][2]);
for (let k = 1; k < 3; k++) {
  const newSum = Math.max(dp[0][k] + dp[1][1], dp[0][k] + dp[1][2]);
  if (temp < newSum) temp = newSum;
}

const result = dp.reduce((acc, cur, idx) => {
  if (idx < 2) {
    return acc;
  }
  return acc + Math.max(cur[0], cur[1], cur[2]);
}, temp);

console.log(result);
