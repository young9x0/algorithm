//1, 2, 3 더하기 5

const question = `3
4
7
10`;
// 3
// 9
// 27

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').trim() : question).split('\n');
const SIZE = 100000;
const MOD = 1000000009;
const dp = Array.from({ length: SIZE + 1 }, () => new Array(4).fill(0));
dp[1][1] = dp[2][2] = dp[3][1] = dp[3][2] = dp[3][3] = 1;
for (let i = 4; i < SIZE + 1; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
}
// console.log(dp);

let result = '';
input.map((num, idx) => {
  if (idx > 0) {
    const N = Number(num);
    result += `${(dp[N][1] + dp[N][2] + dp[N][3]) % MOD}\n`;
  }
});

console.log(result);
