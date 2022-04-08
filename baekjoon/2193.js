//이친수

const question = '7'; //2

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const num = +input[0];
const pinaryPrev = [1, 0];

for (let i = 2; i < num ; i++) {
  // console.log('i', i);
  // console.log('pinaryPrev',pinaryPrev)
  let newZero=0, newOne=0;

    newZero = BigInt(pinaryPrev[0] + pinaryPrev[1]);
    newOne = BigInt(pinaryPrev[0]) 
    pinaryPrev[0] = newZero;
    pinaryPrev[1] = newOne;
}
// console.log(pinaryPrev)
console.log(String(pinaryPrev[0]+pinaryPrev[1]));


