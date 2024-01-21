//https://school.programmers.co.kr/learn/courses/30/lessons/86971
// 전력망을 둘로 나누기
function solution(n, wires) {
  let answer = -1;
  let maxIdx = 0;
  let max = 1;
  for (let i = 0; i < n; i++) {
    const count = wires.filter(([a, b]) => a === i + 1 || b === i + 1).length;
    if (max < count) {
      maxIdx = i;
      max = count;
    }
  }
  // console.log('maxIdx', maxIdx);

  let maxDep = 0;

  function countNode(list, num, dep) {
    // console.log('----num', num);
    const connected = [];
    list.map(([a, b]) => {
      if (a === num) {
        connected.push(b);
      }
      if (b === num) {
        connected.push(a);
      }
    });

    // console.log('connected', connected);
    if (connected.length === 0) {
      // console.log('dep', dep);
      maxDep = Math.max(maxDep, dep);
      if (n % 2 === 0) {
        maxDep -= 1;
      }
      // console.log('maxDep---', maxDep);
      return;
    }

    const filterNumList = list.filter(([a, b]) => a !== num && b !== num);
    connected.forEach((node) => {
      dep++;
      // console.log('filterNumList', filterNumList);
      countNode(filterNumList, node, dep);
    });
  }

  countNode([...wires], maxIdx + 1, 0);

  return Math.abs(2 * maxDep - n);
}

// console.log(
//   solution(9, [
//     [1, 3],
//     [2, 3],
//     [3, 4],
//     [4, 5],
//     [4, 6],
//     [4, 7],
//     [7, 8],
//     [7, 9],
//   ]),
// ); //3
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ]),
); //0
// console.log(
//   solution(7, [
//     [1, 2],
//     [2, 7],
//     [3, 7],
//     [3, 4],
//     [4, 5],
//     [6, 7],
//   ]),
// ); //1
