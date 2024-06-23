//https://school.programmers.co.kr/learn/courses/30/lessons/131130
//혼자 놀기의 달인
//해법: https://velog.io/@kwb020312/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%98%BC%EC%9E%90-%EB%86%80%EA%B8%B0%EC%9D%98-%EB%8B%AC%EC%9D%B8

function solution(cards) {
  let answer = 0

  // 카드 뽑기
  function drawCard(cardTemp, num, group = []) {
    // 경유한 상자는 값을 0 으로 바꾸며 다시 0에 도착할 때까지 재귀
    if (cardTemp[num - 1] === 0) {
      return group.length
    }
    group.push(cardTemp[num - 1])
    const temp = cardTemp[num - 1]
    cardTemp[num - 1] = 0
    return drawCard(cardTemp, temp, group)
  }

  // // 첫 상자 그룹 구성
  cards.forEach((card, idx) => {
    // cards 배열 사본 생성
    const copy1 = [...cards]
    const firstGroupLength = drawCard(copy1, card)
    // console.log('cards', cards)
    // console.log('copy1', copy1)
    // 두 번째 상자 그룹 구성
    copy1.forEach((card2, idx2) => {
      // 열린 상자가 아니라면
      if (card2 !== 0) {
        // cards 배열 사본 생성
        const copy2 = [...copy1]
        const secondGroupLength = drawCard(copy2, card2)
        // console.log('copy2', copy2)
        // console.log('firstGroupLength * secondGroupLength', firstGroupLength,
        //     secondGroupLength)
        answer = Math.max(answer, firstGroupLength * secondGroupLength)
      }
    })
  })
  return answer
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]))//12
// console.log(solution([4, 9, 6, 11, 5, 1, 8, 2, 10, 7, 3]))//25
