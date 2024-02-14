//https://school.programmers.co.kr/learn/courses/30/lessons/87390
//n^2 배열 자르기

function solution(n, left, right) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    // console.log('i+1',i+1)
    for (let j = 1; j <= n; j++) {
      // console.log('j',j)
      if (j < i + 1) {
        answer.push(i + 1);
      } else {
        answer.push(j);
      }
    }
  }

  return answer.slice(left, right + 1);
}

// console.log(solution(3, 2, 5)); //[3,2,2,3]
console.log(solution(4, 7, 14)); //[4,3,3,3,4,4,4,4]
