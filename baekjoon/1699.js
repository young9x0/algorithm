//53. 제곱수의 합

// const question = `7`; //4
// const question = `1`; //1
// const question = `4`; //1
// const question = `11`; //3
const question = `13`; //2
// const question = `0`; //1
const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
const number = Number(input[0]); //(1 ≤ N ≤ 100,000)
const MAX = 100000;
const DP = Array(MAX).fill(0);
DP[1] = 1;
DP[2] = 2;
DP[3] = 3;
DP[4] = 1;
for (let N = 5; N <= MAX; N++) {
  const sqrt = Math.floor(Math.sqrt(N));
  // console.log('sqrt', sqrt);
  // console.log('DP[sqrt ** 2]', DP[sqrt ** 2]);
  // console.log('DP[N - sqrt ** 2]', DP[sqrt ** 2]);
  if (DP[sqrt ** 2]) {
    DP[N] = DP[sqrt ** 2] + DP[N - sqrt ** 2];
  } else {
    DP[N] = 1;
  }
}
console.log(String(DP[number]));
