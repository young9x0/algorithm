//https://school.programmers.co.kr/learn/courses/30/lessons/12902
//3 x n 타일링
function solution(n) {
  let answer = 0;

  if (n < 2 || n % 2 === 1) {
    return 0
  }

  function divideByFour(num, count) {
    // console.log('num', num)
    // console.log('count', count)

    if (num < 4) {
      return answer += Math.pow(3, n / 2)
    }

    // console.log('num', num)
    count *= Math.pow(2, Math.floor(num / 4))
    // console.log('count', count)
    if (num % 4 === 2) {
      answer += count * 3
      // console.log('num % 4 === 2',)
      // console.log('answer', answer)
    } else {
      answer += count
      // console.log('num % 4 !== 2',)
      // console.log('answer----', answer)
    }

    num -= 4
    // console.log('num', num)
    const divideIndex = Math.floor(((n - num) / 4))
    divideByFour(num, Math.pow(9, divideIndex))
  }

  divideByFour(n, 1)

  // console.log('answer', answer)
  return answer % 1_000_000_007
}

// console.log(solution(2))//3
// console.log(solution(4))//11
// console.log(solution(6))//33
// console.log(solution(8))//103
console.log(solution(10))//309
// console.log(solution(12))//935
