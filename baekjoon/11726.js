//2×n 타일링

// const question = `2`; //2
const question = `9`; //55

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim() : question).split(
  '\n',
);

const n = Number(input[0]);
let count = 0;

for (let twoLen = 1; twoLen < n + 1; twoLen++) {
  let oneLen = n - twoLen;

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
    // checkCombType(standard, divide);
  }
}

function checkCombType(standard, divide) {
  if (divide === 1) {
    count += standard;
  } else {
    if ((divide / 2) % 2 !== 0) {
      // twoLen=2,1 twoLen=1,2

      ((n - twoLen * 2 + 1) * (n - twoLen)) / (twoLen * (twoLen - 1)) + //twoLen>1
        (((n - twoLen * 2 + 1) * (n - twoLen)) / (twoLen - 1)) * 2 + // twoLen=2,1 twoLen=1,2
        n -
        twoLen * 2 +
        1; //(twoLen === 1 || oneLen === 1)
    } else {
      // if ((divide/2) %2 ===0), twoLen=2,2

      ((n - twoLen * 2 + 1) * (n - twoLen)) / (twoLen * (twoLen - 1)) + //twoLen>1
        (n - twoLen * 2 + 1) / twoLen -
        1; //twoLen-1 = 1
    }
  }
}

function calcComb(standard, divide) {
  let firArr = [],
    secArr = [];
  for (let fir = standard; fir > 0, fir > divide - 1; fir--) {
    firArr.push(fir);
  }
  for (let sec = 1; sec < divide + 1; sec++) {
    secArr.push(sec);
  }
  console.log('firArr', firArr);
  console.log('secArr', secArr);
  const firRes = firArr.reduce((acc, cur) => acc * cur, 1);
  const secRes = secArr.reduce((acc, cur) => acc * cur, 1);

  return firRes / secRes;
}
console.log(calcComb(3, 2));
