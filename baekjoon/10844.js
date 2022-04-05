//쉬운 계단 수

// const question = `1`; //9
const question = `2`; //17

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').trim() : question).split('\n');
const num = input[0];

let result = 0;

console.log(10 ** num);

console.log(result % 1000000000);
