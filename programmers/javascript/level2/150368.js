//https://school.programmers.co.kr/learn/courses/30/lessons/150368
//이모티콘 할인행사
//해법: https://cocococo.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-Lv2-%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98-%ED%95%A0%EC%9D%B8%ED%96%89%EC%82%AC
function solution(users, emoticons) {
  //최대값
  let answer = [0, 0];
  let discount = [10, 20, 30, 40];
  //이모티콘에 적용할 할인률의 경우의 수
  const emoticonCase = []

  //깊이 우선 탐색으로 이모티콘별 할인율 적용하기
  function dfs(emoticons, result) {
    console.log('---emoticons', emoticons)
    console.log('---result', result)
    if (emoticons.length < 1) {
      emoticonCase.push(result)
      console.log('stop')
      return
    }

    for (let i = 0; i < discount.length; i++) {
      console.log('discount', i)
      dfs(emoticons.slice(1), [...result, [discount[i], emoticons[0]]])
    }
  }

  dfs(emoticons, [])
  console.log('emoticonCase', emoticonCase)
  // [
  //     [ [ 10, 7000 ], [ 10, 9000 ] ],
  //     [ [ 10, 7000 ], [ 20, 9000 ] ],
  //     [ [ 10, 7000 ], [ 30, 9000 ] ],
  //     [ [ 10, 7000 ], [ 40, 9000 ] ],
  //     [ [ 20, 7000 ], [ 10, 9000 ] ],
  //     [ [ 20, 7000 ], [ 20, 9000 ] ],
  //     [ [ 20, 7000 ], [ 30, 9000 ] ],
  //     [ [ 20, 7000 ], [ 40, 9000 ] ],
  //     [ [ 30, 7000 ], [ 10, 9000 ] ],
  //     [ [ 30, 7000 ], [ 20, 9000 ] ],
  //     [ [ 30, 7000 ], [ 30, 9000 ] ],
  //     [ [ 30, 7000 ], [ 40, 9000 ] ],
  //     [ [ 40, 7000 ], [ 10, 9000 ] ],
  //     [ [ 40, 7000 ], [ 20, 9000 ] ],
  //     [ [ 40, 7000 ], [ 30, 9000 ] ],
  //     [ [ 40, 7000 ], [ 40, 9000 ] ]
  // ]

  const disAmt = (dis, price) => (100 - dis) / 100 * price

  //모든 가지수만큼 실행하기
  emoticonCase.forEach((eCase) => {
    console.log('----eCase', eCase)
//case마다 [가입자 수, 총 매출액]
    const eCaseResult = [0, 0]

    users.forEach(([limitPercent, limitPrice]) => {
      console.log('----users', [limitPercent, limitPrice])
      //해당 사용자의 매출액
      let sales = 0

      //모든
      eCase.forEach(([eDiscount, ePrice]) => {
        if (eDiscount >= limitPercent) {
          sales += disAmt(eDiscount, ePrice)
        }
      })

      console.log('sales', sales)
      console.log('limitPrice', limitPrice)
      //사용자의 최대 구매 가능액을 넘으면 서비스 가입하기
      if (sales >= limitPrice) {
        eCaseResult[0] += 1
      } else {
        eCaseResult[1] += sales
      }
    })
    //현재 서비스 가입자 수 최대값보다 지금 case가 더 많다면 최대값 변경하기
    if (answer[0] < eCaseResult[0]) {
      answer[0] = eCaseResult[0]
      answer[1] = eCaseResult[1]
    }
    //서비스 가입자 수가 같다면 매출액으로 비교하기
    else if (answer[0] === eCaseResult[0]) {
      if (answer[1] < eCaseResult[1]) {
        answer[1] = eCaseResult[1]
      }
    }
    console.log('eCaseResult', eCaseResult)
    console.log('answer', answer)
  })

  return answer;
}

// console.log(solution([[40, 10000], [25, 10000]], [7000, 9000]))//[1, 5400]
console.log(solution(
    [[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200],
      [32, 6900]], [1300, 1500, 1600, 4900]))//[4, 13860]

