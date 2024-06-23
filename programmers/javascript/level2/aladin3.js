function solution(InitString, command) {
  let answer = InitString
  let cursorIdx = answer.length

  for (let i = 0; i < command.length; i++) {
    console.log('command[i]', command[i])
    console.log('cursorIdx', cursorIdx)
    if ("L" === command[i][0] && cursorIdx !== 0) {
      cursorIdx -= 1

    }

    if ("R" === command[i][0] && cursorIdx !== answer.length) {
      cursorIdx += 1

    }

    if ("D" === command[i][0] && cursorIdx !== 0) {
      answer = answer.slice(0, cursorIdx - 1) + answer.slice(
          cursorIdx)
      cursorIdx -= 1
    }

    if ("I" === command[i][0]) {
      if (cursorIdx === answer.length) {
        answer += command[i][2]
      } else {
        answer = answer.slice(0, cursorIdx) + command[i][2] + answer.slice(
            cursorIdx + 1)
        cursorIdx += 1
      }
    }

    if (command[i][0] === "P") {
      if (cursorIdx === answer.length) {
        answer += command[i][2]
      } else {
        answer = answer.slice(0, cursorIdx) + command[i][2] + answer.slice(
            cursorIdx)
        cursorIdx += 1
      }
    }

  }
  console.log(answer)
  return answer
}

// console.log(solution("abcd", ["L", "P Z", "L", "D", "R", "I x"]))//"abZX"
// console.log(solution("", ["P a", "P b", "L", "I c", "I d"]))//"acd"
console.log(solution("abc", ["I c"]))

