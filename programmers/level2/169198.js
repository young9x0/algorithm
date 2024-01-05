//169198
//https://school.programmers.co.kr/learn/courses/30/lessons/169198
//당구 연습
//해법: https://wooserk.tistory.com/113
function solution(m, n, startX, startY, balls) {
  let answer = [];
  const transformStart = [
    [startX, 2 * n - startY],
    [startX, -startY],
    [-startX, startY],
    [2 * m - startX, startY]
  ]
  for (let i = 0; i < balls.length; i++) {
    let min = Number.MAX_VALUE;// 1.7976931348623157e+308

    for (let j = 0; j < transformStart.length; j++) {
      const [transX, transY] = transformStart[j]
      console.log('transX', transX)
      console.log('balls[i][0]', balls[i][0])

      if (transX === balls[i][0]) {
        const maxY = Math.max(startY, transY)
        const minY = Math.min(startY, transY)
        console.log('startY', startY)
        console.log('maxY', maxY)
        console.log('minY', minY)
        if (minY < balls[i][1] && balls[i][1] < maxY) {
          continue
        }
      }

      console.log('transY', transY)
      console.log('balls[i][1]', balls[i][1])
      if (transY === balls[i][1]) {
        const maxX = Math.max(startX, transX)
        const minX = Math.min(startX, transX)
        console.log('startX', startX)
        console.log('maxX', maxX)
        console.log('minX', minX)
        if (minX < balls[i][0] && balls[i][0] < maxX) {
          continue
        }
      }

      const temp = (transX - balls[i][0]) ** 2 + (transY - balls[i][1]) ** 2
      console.log('temp', temp)
      min = Math.min(min, temp)
      console.log('min', min)
    }

    answer.push(min)
  }
  return answer;
}

console.log(solution(10, 10, 3, 7, [[7, 7], [2, 7], [7, 3]]))//[52, 37, 116]
