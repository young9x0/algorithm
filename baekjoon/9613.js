//GCD 합
//최대공약수(Greatest Common Divisor, GCD)
//유클리드 호제법

const question = `3
4 10 20 30 40
3 7 5 12
3 125 15 25
`;
// 70
// 3
// 35

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

let answer = [];

input.map((str, idx) => {
  if (idx > 0) {
    let result = 0;
    const splited = str.split(' ').map(Number);

    // console.log("splited", splited);

    splited.map((nums, index) => {
      if (index > 0) {
        for (let i = 1; i < splited.length; i++) {
          if (splited[i + index]) {
            result += FindGCD(nums, splited[i + index]);
          }
        }
      }
    });
    !!result && answer.push(result);
  }
});

function FindGCD(fir, sec) {
  // console.log("fir", fir);
  // console.log("sec", sec);
  if (sec === 0) {
    return fir;
  } else {
    return FindGCD(sec, fir % sec);
  }
}

console.log(answer.join('\n'));
