//이친수

const question = '6'; //2

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const num = +input[0];
let count = 1;

const pinary = Array(num);
pinary[0] = [1];
let flag = 1;
while (flag < num) {
  pinary[flag++] = [];
}

for (let i = 0; i < num; i++) {
  pinary[i].map((int) => {
    if (i + 1 < num) {
      if (!!int) {
        pinary[i + 1].push(0);
      } else {
        count++;
        pinary[i + 1].push(0);
        pinary[i + 1].push(1);
      }
    }
  });
}
// console.log(pinary);
console.log(count);
