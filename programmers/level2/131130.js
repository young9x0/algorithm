//https://school.programmers.co.kr/learn/courses/30/lessons/131130
//혼자 놀기의 달인

function solution(cards) {
  let answer = 0;
  const boxCombinationList = []

  function checkCard(boxList, card, nexCard) {
    // console.log('1 boxList', boxList)
    // console.log('card', card)
    // console.log('nexCard', nexCard)

    if (boxList.length > 1 && boxList[0] === card) {
      return boxList
    }

    boxList.push(card)
    if (card === nexCard) {
      return boxList
    }
    // console.log('2 boxList', boxList)
    const nextCardIndex = cards.indexOf(nexCard)
    // console.log('nextCardIndex', nextCardIndex)
    checkCard(boxList, nexCard, nextCardIndex + 1)
  }

  cards.forEach((card, idx) => {
    if (card < 2 || boxCombinationList.length === 3) {
      // console.log('=======stop')
      return
    }

    // console.log('start-----')
    const boxList = []
    checkCard(boxList, card, idx + 1)

    // console.log('-----boxList', boxList)
    const boxComb = boxList.sort((a, b) => a - b).join('')
    const isExist = boxCombinationList.some((comb) => comb === boxComb)
    if (!isExist) {
      boxCombinationList.push(boxComb)
    }
    // console.log('-----boxCombinationList', boxCombinationList)
  })

  return boxCombinationList.reduce((acc, cur) => acc * cur.length, 1)
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]))//12
