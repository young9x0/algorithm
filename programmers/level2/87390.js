//https://school.programmers.co.kr/learn/courses/30/lessons/87390
//n^2 배열 자르기

function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    // console.log('i', i);
    const rowIdx = Math.floor(i / n) + 1;
    const colIdx = (i % n) + 1;
    // console.log('rowIdx', rowIdx);
    // console.log('colIdx', colIdx);

    if (colIdx < rowIdx) {
      answer.push(rowIdx);
    } else {
      answer.push(colIdx);
    }
  }
  return answer;
}

// console.log(solution(3, 2, 5)); //[3,2,2,3]
// console.log(solution(4, 7, 14)); //[4,3,3,3,4,4,4,4]
console.log(solution(10 ** 7, 7, 14));
