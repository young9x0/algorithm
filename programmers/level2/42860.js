//https://school.programmers.co.kr/learn/courses/30/lessons/42860
//탐욕법(Greedy) > 조이스틱
function solution(name) {
  let answer = 0
  const nameArr = name.split('')
  const alphabetMapper = {
    A: 0,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 13,
    P: 12,
    Q: 11,
    R: 10,
    S: 9,
    T: 8,
    U: 7,
    V: 6,
    W: 5,
    X: 4,
    Y: 3,
    Z: 2,
  }
  console.log('A', 'A'.charCodeAt())
  console.log('z', 'Z'.charCodeAt())
  nameArr.forEach((str) => {
    answer += alphabetMapper[str]
  })
  answer -= 1
  return answer
}

// console.log(solution('JAZ'))
// console.log(solution('JEROEN'))
// console.log(solution('JAN'))
console.log(solution('BBBBAAAABA'))
