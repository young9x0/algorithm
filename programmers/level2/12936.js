//https://school.programmers.co.kr/learn/courses/30/lessons/12936
//줄 서는 방법
//해법: https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%A4%84-%EC%84%9C%EB%8A%94-%EB%B0%A9%EB%B2%95-JS

function factorial(n) {
  let res = 1
  for (let i = 2; i <= n; i++) {
    res *= i
  }
  return res
}

function solution(n, k) {
  let answer = []
  const elements = new Array(n).fill(1)
  for (let i = 0; i < n; i++) {
    elements[i] = i + 1
  }

  let nth = k - 1
  while (elements.length) {
    // console.log('nth', nth)
    // console.log('answer', answer)
    if (nth === 0) {
      answer.push(...elements)
      break
    }
    // console.log('elements', elements)
    const fact = factorial(elements.length - 1)
    // console.log('fact', fact)
    const index = Math.floor(nth / fact)
    // console.log('index', index)
    nth = nth % fact
    // console.log('nth', nth)
    answer.push(elements[index])
    elements.splice(index, 1)
  }

  return answer
}

console.log(solution(4, 5))
