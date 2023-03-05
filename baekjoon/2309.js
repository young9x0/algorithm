// 66. 2309 일곱 난쟁이
//3/5 pm 6:39 - pm 7:24
//해설: https://velog.io/@rkio/%EB%B0%B1%EC%A4%80-Javascript-2309

const question = `20
7
23
19
10
15
25
8
13`;

// 7;
// 8;
// 10;
// 13;
// 19;
// 20;
// 23;

const fs = require('fs');
const inputs = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString().trim() : question
).split('\n');

const heights = inputs.map(Number);
// console.log(heights);

const sub = heights.reduce((acc, cur) => acc + cur, 0) - 100;
let result;

for (let i = 0; i < heights.length; i++) {
  for (let j = i + 1; j < heights.length; j++) {
    if (heights[i] + heights[j] === sub) {
      result = heights.filter((height) => height !== heights[i] && height !== heights[j]);
      // console.log(result.sort((a, b) => a - b).join('\n')); //안에서 콘솔찍으면 틀림
      break;
    }
  }
}
console.log(result.sort((a, b) => a - b).join('\n'));
