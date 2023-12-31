//https://school.programmers.co.kr/learn/courses/30/lessons/131130
//혼자 놀기의 달인

function solution(cards) {
  let answer = 0;
  const boxCombinationList = []

  function checkCard(boxList, card) {
    // console.log('1 boxList', boxList)
    // console.log('card', card)

    if (boxList.length > 1 && boxList[0] === card) {
      return boxList
    }

    boxList.push(card)

    if (card === cards[card - 1]) {
      return boxList
    }
    // console.log('2 boxList', boxList)

    checkCard(boxList, cards[card - 1])
  }

  cards.forEach((card) => {
    if (card < 2) {
      // console.log('=======stop')
      return
    }

    // console.log('start-----')
    const boxList = []
    checkCard(boxList, card)

    // console.log('-----boxList', boxList)
    const boxComb = boxList.sort((a, b) => a - b).join()
    const isExist = boxCombinationList.some((comb) => comb === boxComb)
    if (!isExist) {
      boxCombinationList.push(boxComb)
    }
    // console.log('-----boxCombinationList', boxCombinationList)
  })

  return boxCombinationList.length === 1 ? 0 : boxCombinationList.reduce(
      (acc, cur) => acc * cur.split(',').length, 1)
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]))//12
// console.log(solution([4, 9, 6, 11, 5, 1, 8, 2, 10, 7, 3]))//25
