//60. 1932 정수 삼각형
//1/15 pm 2:00 - 3:23
//해설: https://amunre21.github.io/boj/3-1932/
const question = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`;
//30

const fs = require('fs');

const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
const n = inputs.shift();
const node = inputs.map((str) => str.split(' ').map(Number));
const dp = [];

for (let i = 0; i < n; i++) {
  dp[i] = Array(i + 3).fill(0);
}

dp[0][1] = node[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    dp[i][j + 1] = node[i][j] + Math.max(dp[i - 1][j], dp[i - 1][j + 1]);
  }
}

console.log(Math.max(...dp[n - 1]));
