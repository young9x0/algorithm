//이친수

const question = '6'; //2

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const num = +input[0];

const pinary = Array(num - 1);
pinary[0] = [0, 1];
pinary[1] = [1, 0];
let flag = 2;
while (flag < num - 1) {
  pinary[flag++] = [0, 0];
}

for (let i = 1; i < num - 2; i++) {
  // console.log('i', i);

  if (i + 1 < num) {
    for (let flagZero = 0; flagZero < pinary[i][0]; flagZero++) {
      pinary[i + 1][0] += 1;
      pinary[i + 1][1] += 1;
    }
    for (let flagOne = 0; flagOne < pinary[i][1]; flagOne++) {
      pinary[i + 1][0] += 1;
    }
  }

  // console.log('pinary', pinary);
}
const count = pinary.reduce((acc, cur) => acc + cur[0], 1);

console.log(count);
