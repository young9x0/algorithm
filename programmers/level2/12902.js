//https://school.programmers.co.kr/learn/courses/30/lessons/12902
//3 x n 타일링
function solution(n) {
  if (n < 2 || n % 2 === 1) {
    return 0
  }

  if (n === 2) {
    return 3
  }

  const cache = [3]
  for (let i = 1; i < n / 2; i++) {
    cache.push(2 + cache[cache.length - 1] * 3)
  }

  // console.log('answer', answer)
  return cache[cache.length - 1] % 1_000_000_007
}

// console.log(solution(2))//3
// console.log(solution(4))//11
// console.log(solution(6))//35
// console.log(solution(8))//107
// console.log(solution(10))//
// console.log(solution(12))//
