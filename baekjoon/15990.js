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

function test(num) {
  const addTypeTemp = {
    1: [],
    2: [],
    3: [],
  };
  //{
  // 1:[[1,2,1],[1,3]],
  // 2:[[]],
  // 3:[[3,1]]
  //}
  let max = 3;
  if (max > num) max = num;
  for (let startIdx = 1; startIdx < max + 1; startIdx++) {
    addTypeTemp[startIdx].push(makeAddTypeTempResult(num, startIdx));
    console.log('addTypeTemp', addTypeTemp);
  }
}

function makeAddTypeTempResult(num, startIdx) {
  let result = [];
  console.log('1 num', num); //4
  console.log('1 startIdx', startIdx); //1
  result = [startIdx];

  for (let i = 1; i < 4 && num >= i; i++) {
    console.log('1 i', i);

    let prev = result[result.length - 1];
    console.log('1 prev', prev); //1
    const acc = result.reduce((acc, cur) => acc + cur);
    console.log('1 acc', acc);
    if (acc < num) {
      if (i !== prev) {
        if (num === i) {
          result.push(i); //1
          break;
        } else if (num > i && i !== prev) {
          result.push(i); //2
          checkDoubleNum(num - i - startIdx, i, result);
        }
      }
    }
    //[1,2,1]}
    console.log('1 result', result);
  }
  return result;
}

function checkDoubleNum(num, prev, result) {
  console.log('2 num', num); //1
  console.log('2 prev', prev); //2
  console.log('2 result', result); //[1,2]

  for (let i = 1; i < 4 && num >= i; i++) {
    console.log('2 i', i); //1
    if (i !== prev) {
      if (num === i) {
        result.push(i);
        break;
      } else if (num > i && i !== prev) {
        result.push(i);
        checkDoubleNum(num - i, i); //1,1
      }
    }
  }
}

console.log(test(4));
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
