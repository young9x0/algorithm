//64. 2133 타일 채우기
//2/19 am 10:10 - pm 12:03
//해설: https://webruden.tistory.com/1048, https://mizzo-dev.tistory.com/entry/baekjoon2133

const question = `6`; //3

const fs = require('fs');
const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const [str] = inputs;
const n = Number(str);
// console.log(n);

if (n % 2 !== 0) {
  console.log(0);
  return;
}

const dp = new Array(n + 1).fill(0);
dp[0] = 1;
dp[2] = 3;

for (let i = 4; i <= n; i += 2) {
  dp[i] = dp[i - 2] * 3;

  for (let j = 4; j <= i; j += 2) {
    dp[i] += dp[i - j] * 2;
  }
}

console.log(dp[n]);
