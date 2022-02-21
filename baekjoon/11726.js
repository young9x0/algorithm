//2×n 타일링

// const question = `2`; //2
const question = `9`; //55

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim() : question).split(
  '\n',
);

const n = Number(input[0]);

const DP = {
  1: 1,
  2: 2,
};

for (let i = 3; i <= n; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
  // console.log(DP);
}

console.log(DP[n]);
