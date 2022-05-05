//54.합분해

// const question = `20 2`; //21
// const question = `6 4`; //84

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');
//첫째 줄에 답을 1,000,000,000으로 나눈 나머지를 출력한다.
