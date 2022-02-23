//1, 2, 3 더하기

const question = `3
4
7
10`;
// 7
// 44
// 274

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim() : question).split(
  '\n',
);
let result = [];
const checkLength = {
  1: 0,
  2: { 1: 1 },
  3: { 1: 2, 2: 1, 3: 0 }, //3
  // 4: { 1: 4, 2: 2, 3: 1 }, //7
  // 5: { 1: 7, 2: 4, 3: 2 }, //12
};

function makeCheckLength(raw) {
  for (let num = 3; num < raw; num++) {
    // console.log('num', num);

    checkLength[num + 1] = {
      1: checkLength[num][1] + checkLength[num][2] + (checkLength[num][3] || checkLength[num - 1][1]),
      2: checkLength[num][1],
      3: checkLength[num][2],
    };
    // console.log(checkLength);
  }
  return checkLength[raw][1] + checkLength[raw][2] + checkLength[raw][3];
}

input.map((n, idx) => {
  if (idx > 0) {
    const int = Number(n);
    if (int < 12) result.push(makeCheckLength(int));
  }
});

console.log(result.join('\n'));
