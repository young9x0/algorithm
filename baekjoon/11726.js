//2×n 타일링

// const question = `2`; //2
const question = `9`; //55

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim() : question).split(
  '\n',
);

const n = Number(input[0]);
let count = 0;

for (let twoLen = 0; twoLen < n + 1, n - twoLen * 2 >= 0; twoLen++) {
  let oneLen = n - twoLen * 2,
    divideTypeArr = [];
  console.log('oneLen', oneLen, 'twoLen', twoLen);

  if (twoLen === 0 || oneLen === 0) {
    count += 1;
  } else {
    let standard = 0,
      divide = 0;
    if (oneLen >= twoLen) {
      standard = oneLen + 1;
      divide = twoLen;
    } else {
      standard = twoLen + 1;
      divide = oneLen;
    }
    console.log('standard', standard, 'divide', divide);

    if (divide === 1) {
      count += standard;
    } else {
      checkCombType(divide, divideTypeArr);
      divideTypeArr.map((type) => {
        if (type > 0) {
          count += calcComb(standard, type);
        }
      });
    }
  }
  console.log('count', count);
}

function checkCombType(divide, divideTypeArr) {
  for (let factor = 0; factor < divide + 1, divide - factor >= 0; factor++) {
    factor > 0 && divideTypeArr.push(factor);
    factor === divide - factor && divideTypeArr.push(factor);
    // divideTypeArr.push(divide - factor);
  }
  console.log('divideTypeArr', divideTypeArr);
}

function calcComb(first, second) {
  let firArr = [],
    secArr = [];

  for (let fir = first; fir > 0, firArr.length < second; fir--) {
    firArr.push(fir);
  }
  for (let sec = 1; sec < second + 1; sec++) {
    secArr.push(sec);
  }
  console.log('firArr', firArr, 'secArr', secArr);

  const firRes = firArr.reduce((acc, cur) => acc * cur, 1);
  const secRes = secArr.reduce((acc, cur) => acc * cur, 1);

  console.log('calcComb result', firRes / secRes);
  return firRes / secRes;
}

console.log('final count', count);
