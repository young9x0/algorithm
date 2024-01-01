//https://school.programmers.co.kr/learn/courses/30/lessons/12923
//숫자 블록
//해법: https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-%EC%88%AB%EC%9E%90-%EB%B8%94%EB%A1%9D-JS
function solution(begin, end) {
  let answer = [];
  const block = Array(end - begin + 1).fill(0)
  console.log('block', block)
  console.log('1e7', 1e7)

  function findMaxDivisor(num) {
    console.log('num', num)
    if (num === 1) {
      return 0
    }

    console.log('Math.sqrt(num)', Math.sqrt(num))
    for (let i = 2; i <= Math.sqrt(num); i++) {
      console.log('i', i)
      console.log('num / i', num / i)
      console.log('num % i', num % i)
      if (num % i === 0 && num / i <= 1e7) {
        return num / i
      }
    }
    return 1
  }

  for (let i = begin; i <= end; i++) {
    answer.push(findMaxDivisor((i)))
  }
  return answer;
}

console.log(solution(10, 14))//[0, 1, 1, 2, 1, 3, 1, 4, 3, 5]
