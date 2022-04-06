//쉬운 계단 수

// const question = `1`; //9
// const question = `2`; //17
const question = `3`; //32
// const question = `4`; //338
// const question = `5`; //3398
// const question = `6`; //33998

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').trim() : question).split('\n');
const num = +input[0];
const mod = 1000000000;
const memo = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

let Arrlen = num - 1;
while (Arrlen--) {
  memo.push([...Array(10)]);
}

for (let pos = 1; pos < num; pos++) {
  for (let idx = 0; idx < 10; idx++) {
    memo[pos][idx] = ((memo[pos - 1][idx - 1] || 0) + (memo[pos - 1][idx + 1] || 0)) % mod;
  }
}

// console.log(memo);
const result = memo[num - 1].reduce((acc, cur) => (acc + cur) % mod, 0);
console.log(result);
