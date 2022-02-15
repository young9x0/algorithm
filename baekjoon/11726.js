//2×n 타일링

// const question = `2`; //2
const question = `9`; //55

const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim()
    : question
).split('\n');

const n = Number(input[0]);
let count = 0

for (let i = 1; i < n + 1; i++){
if (i = 0) {
  count += 1
}
else if (i === 1 || n-i === 1) {
  count += (n-(i*2) +1)
}
else if (i === 2) {
  ((n-(i*2) +1) * (n - i)) / (i * (i - 1))//i>1
    +(n-(i*2) +1) / i - 1//i-1 = 1

  }
else if (i === 3) {
  ((n-(i*2) +1) * (n - i)) / (i * (i - 1))//i>1
    + ((n-(i*2) +1) * (n - i)) / ((i - 1)) * 2// i=2,1 i=1,2
    + n - (i * 2) + 1//(i === 1 || n-i === 1)

  }
}
