//1, 2, 3 더하기 5

const question = `3
4
7
10`;
// 3
// 9
// 27

const fs = require('fs');
const input = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin', 'utf8').trim() : question).split('\n');
let result = [];

input.map((N, idx) => {
  if (idx > 0) {
    const num = Number(N);
    let count = 0;

    // console.log('count', count);
    // result.push(count / 1000000009);
  }
});

const addFactors = {
  1: [],
  2: [],
  3: [],
};

function test(num) {
  //{
  // 1:[[1,2,1],[1,3]],
  // 2:[[]],
  // 3:[[3,1]]
  //}
  for (let i = 1; i < 4; i++) {
    let prev = 0;
    checkPrev(num, i, prev);
  }
}

function checkPrev(num, idx, prev) {
  console.log(num, idx, prev, addFactors);
  for (let i = 1; i < 4; i++) {
    if (prev !== i) {
      addFactors[idx] = [];
      addFactors[idx].push(i);
      prev = i;
      if (num > i) {
        checkPrev(idx, prev);
      } else if (num === i) {
        addFactors[idx].push(i);
      }
    }
  }
}

console.log(test(5));
// console.log(result.join('\n'));
//i=1
//[1]

//i=2
//[2]

//i=3
//[1,2]

//[2,1]

//[3]

//i=4
//[1,2,1]
//[1,3]

//[3,1]

//i=5
//[1,3,1]

//[2,1,2]
//[2,3]

//[3,2]

//i=6
//[1,2,1,2]
//[1,2,3]
//[1,3,2]

//[2,1,2,1]
//[2,1,3]
//[2,3,1]

//[3,1,2]
//[3,2,1]
