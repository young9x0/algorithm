//https://school.programmers.co.kr/learn/courses/30/lessons/12899
//124 나라의 숫자
function solution(n) {
  let answer = ''
  const nList = [1,2,4]

  function addNumber(num){
    if(num<1){
      return Number(answer)
    }

    const lNumber = num%3 === 0 ? 4: num%3
    answer = lNumber + answer
    const divide3 = Math.floor(num/3)
    const fNumber = num%3 === 0 ? divide3-1 : divide3
    addNumber(fNumber)
  }


  addNumber(n)


  return Number(answer)
}

console.log(solution(3))//4
console.log(solution(4))//11
console.log(solution(10))//41
console.log(solution(14))//111

