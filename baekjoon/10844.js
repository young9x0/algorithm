//쉬운 계단 수

// const question = `1`; //9
// const question = `2`; //17
const question = `3`; //32

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').trim() : question).split('\n');
const num = +input[0];

let result = 0;
if (num > 2) {
  for (let i = 10; i < 10 ** (num - 1); i++) {
    const temp = i + '';
    const splited = temp.split('');
    // console.log('splited', splited);
    const lastNum = splited[splited.length - 1];
    const prevNum = splited[splited.length - 2];

    if (+splited[0] !== 0 && Math.abs(lastNum - prevNum) === 1) {
      //   console.log('lastNum', lastNum);
      //   console.log('prevNum', prevNum);
      if (+lastNum === 0 || +lastNum === 9) {
        result += 1;
      } else {
        result += 2;
      }
    }
    // console.log('result', result);
  }
} else if (num > 1) {
  result = 17;
} else {
  result = 9;
}

console.log(result % 1000000000);
