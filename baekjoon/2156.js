//60. 2156 포도주 시식
//1/8 pm 12:00 - 14:04
//해설: https://tesseractjh.tistory.com/116(가장 효율적인 풀이), https://amunre21.github.io/boj/2-2156/(생각할 땐 최신 기준으로 생각하기)
const question = `6
6
10
13
9
8
1
`;
//33

const fs = require('fs');

const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const [n, ...wine] = inputs.map(Number);
const solve = (n, wine) => {
  if (n === 1) return wine[0];
  else if (n === 2) return wine[0] + wine[1];

  const dp = new Array(n).fill(0);
  dp[1] = wine[0];
  dp[2] = wine[0] + wine[1];

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      // 지금 먹음
      dp[i - 3] + wine[i - 2] + wine[i - 1], //  x, o, o
      dp[i - 2] + wine[i - 1], // o, x, o
      // 지금 안 먹음
      dp[i - 1], // o, o, x
    );
  }

  return dp[n];
};

console.log(solve(n, wine));
