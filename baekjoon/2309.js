// 66. 2309 일곱 난쟁이
//3/5 pm 6:07 - pm 6:39
//해설:

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
const inputs = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').toString() : question).split('\n');

const heights = inputs.map(Number);
// console.log(heights);

const totalSum = heights.reduce((acc, cur) => (acc += cur), 0);
// console.log(totalSum);
const needSub = totalSum - 100;

for (let i = 0; i < heights.length; i++) {
  for (let j = i + 1; j < heights.length; j++) {
    if (heights[i] + heights[j] === needSub) {
      const result = heights.filter((_, idx) => idx !== i && idx !== j);
      console.log(result.sort((a, b) => a - b).join('\n'));
    }
  }
}
