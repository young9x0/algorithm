//https://school.programmers.co.kr/learn/courses/30/lessons/72412
// 순위 검색
function solution(info, query) {
  let answer = [];
  const splitInfo = info.map((str) => {
    const splitStr = str.split(" ")
    const filtered = splitStr.filter((info, idx) => idx < 4)
    return [Number(splitStr[4]), ...filtered]
  })

  const splitQuery = query.map(
      (str) => {
        const splitStr = str.split(" ").filter((str) => str !== 'and')
        const filtered = splitStr.filter((info, idx) => idx < 4)
        return [Number(splitStr[4]), ...filtered]
      })
  // console.log(splitInfo, splitQuery)

  splitQuery.forEach(
      (queryArr, queryIdx) => {
        //매 질의 리스트 새로 시작할 때마다 지원자 정보 리스트 초기화
        let infoList = splitInfo.slice(0)
        // infoList = [
        //   [ 150, 'java', 'backend', 'junior', 'pizza' ],
        //   [ 210, 'python', 'frontend', 'senior', 'chicken' ],
        //   [ 150, 'python', 'frontend', 'senior', 'chicken' ],
        //   [ 260, 'cpp', 'backend', 'senior', 'pizza' ],
        //   [ 80, 'java', 'backend', 'junior', 'chicken' ],
        //   [ 50, 'python', 'backend', 'senior', 'chicken' ]
        // ]

        //queryIdx번째 질의리스트 queryArr의 모든 조건을 만족하는 지원자 정보 리스트 확인하기
        queryArr.forEach(
            (queryWord, queryWordIdx) => {
              // console.log('queryWord', queryWord)
              if (queryWord === '-') {
                return
              }

              const queryWordResult = infoList.map(
                  (info,) => {
                    // console.log('info', info)
                    // info = [ 150, 'java', 'backend', 'junior', 'pizza' ],

                    //score queryWord일 때
                    if (queryWordIdx === 0) {
                      return (info[0] >= queryWord) ? info : []
                    }

                    //score가 아닌 queryWord일 때
                    const isExist = info.filter((condition) => {
                      if (condition === queryWord) {
                        return true
                      }
                    }).length > 0
                    // console.log('isExist', isExist)
                    return isExist ? info : []
                  }
              )

              // console.log('queryWordResult', queryWordResult)
              infoList = queryWordResult
            })

        // console.log('final infoList', infoList)
        answer[queryIdx] = infoList.filter(
            (info) => info.length > 0).length
      })

  return answer
}

console.log(
    solution(
        ["java backend junior pizza 150", "python frontend senior chicken 210",
          "python frontend senior chicken 150", "cpp backend senior pizza 260",
          "java backend junior chicken 80", "python backend senior chicken 50"],
        ["java and backend and junior and pizza 100",
          "python and frontend and senior and chicken 200",
          "cpp and - and senior and pizza 250",
          "- and backend and senior and - 150", "- and - and - and chicken 100",
          "- and - and - and - 150"])
)
//[1,1,1,1,2,4]
