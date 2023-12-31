//https://school.programmers.co.kr/learn/courses/30/lessons/12936
//줄 서는 방법

function solution(n, k) {
  let answer = []
  const elements = []

  for (let i = 1; i < n + 1; i++) {
    elements.push(i)
  }

  function makeComb(remainList, type) {
    // console.log('makeComb start---')
    // console.log('remainList', remainList)
    // console.log('type', type)
    if (remainList.length === 0) {
      answer.push(type)
      // console.log('answer', answer)
      return
    }

    remainList.forEach((item) => {
      // console.log('forEach--', item)
      let temp = []
      if (temp.length === 0) {
        temp = [...type]
      }
      temp.push(item)
      // console.log('after push temp', temp)
      const filtered = remainList.filter((num) => num !== item)
      // console.log('filtered', filtered)
      makeComb(filtered, temp)
    })

  }

  for (let i = 1; i < n + 1; i++) {
    const type = [i]
    // console.log('---start', i)
    const orderList = [...elements]
    const filtered = orderList.filter((num) => num !== i)
    // console.log('filtered', filtered)
    makeComb(filtered, type)

  }
  // console.log('answer', answer)
  return answer[k - 1]
}

console.log(solution(4, 5))
