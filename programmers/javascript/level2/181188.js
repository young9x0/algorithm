//https://school.programmers.co.kr/learn/courses/30/lessons/181188
//요격 시스템
//해법: https://chamdom.blog/pg2-181188/
function solution(targets) {
  let answer = 1;
  targets.sort((a, b) => b[0] - a[0])
  console.log('targets', targets)
  // [
  //     [11, 13],
  //     [10, 14],
  //     [5, 12],
  //     [4, 5],
  //     [4, 8],
  //     [3, 7],
  //     [1, 4]
  // ]

  let checkpoint = targets[0][0]
  console.log('checkpoint', checkpoint)

  for (let i = 1; i < targets.length; i++) {
    const [start, end] = targets[i]

    if (end <= checkpoint) {
      checkpoint = start
      answer++
    }
  }
  return answer;
}

console.log(
    solution([[4, 5], [4, 8], [10, 14], [11, 13], [5, 12], [3, 7], [1, 4]]))
