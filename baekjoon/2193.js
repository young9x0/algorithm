//이친수

const question = '3'; //2

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const num = +input[0];
let pinaryPrev = [1, 0];

for (let i = 2; i < num ; i++) {
  // console.log('i', i);
let temp=[0,0]
    for (let flagZero = 0; flagZero < pinaryPrev[0]; flagZero++) {
      temp[0] += 1;
      temp[1] += 1;
    }
    for (let flagOne = 0; flagOne < pinaryPrev[1]; flagOne++) {
      temp[0] += 1;
    }
    pinaryPrev = temp
}

console.log( pinaryPrev[0]+pinaryPrev[1]);


