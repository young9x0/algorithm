//이친수

const question = '6'; //2

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const num = +input[0];
let pinaryPrev = [1, 0];

for (let i = 2; i < num ; i++) {
  // console.log('i', i);
let temp=[0,0]
    temp[0] += pinaryPrev[0] + pinaryPrev[1];
    temp[1] += pinaryPrev[0];

    pinaryPrev = temp
}
// console.log(pinaryPrev)
console.log( pinaryPrev[0]+pinaryPrev[1]);


