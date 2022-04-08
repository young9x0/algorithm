//이친수

const question = '900';
//54877108839480000051413673948383714443800519309123592724494953427039811201064341234954387521525390615504949092187441218246679104731442473022013980160407007017175697317900483275246652938800
//5.487710883947999e+187
const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const num = +input[0];
const pinaryPrev = [1, 0];

for (let i = 2; i < num ; i++) {
  // console.log('i', i);
  // console.log('pinaryPrev',pinaryPrev)
  let newZero=0, newOne=0;

    newZero = (pinaryPrev[0] + pinaryPrev[1]);
    newOne = (pinaryPrev[0]) 
    pinaryPrev[0] = newZero;
    pinaryPrev[1] = newOne;
}
// console.log(pinaryPrev)
console.log(String(pinaryPrev[0]+pinaryPrev[1]));


