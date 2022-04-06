//쉬운 계단 수

// const question = `1`; //9
// const question = `2`; //17
const question = `3`; //32

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').trim() : question).split('\n');
const num = Number(input[0]);

const nextChildLenType = [1, 2, 2, 2, 2, 2, 2, 2, 2, 1];

let result = 0;
if (num > 1) {
  for (let i = 10; i < 10 ** (num - 1); i++) {
    const temp = i + '';
    const splited = temp.split('');
    // console.log('splited', splited);
    const lastNum = splited[splited.length - 1];
    const secLastNum = splited[splited.length - 2];

    if (+splited[0] !== 0 && Math.abs(lastNum - secLastNum) === 1) {
      //   console.log('lastNum', lastNum);
      //   console.log('secLastNum', secLastNum);
      result += nextChildLenType[lastNum];
    }
    // console.log('result', result);
  }
} else {
  result = 9;
}

console.log(result % 1000000000);
