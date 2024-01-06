function solution(cookies, k) {
  let answer = []
  let maxLen = 0

  function eat(result, idx,) {
    console.log('max, result, cookies[idx], idx', maxLen, result, cookies[idx],
        idx)

    if (cookies.length - 1 === idx && maxLen <= result.length
    ) {

      const rTotal = result.join('')
      const joinArr = answer.map((arr) => arr.join('')
      )
      const filtered = joinArr.filter((str) => {
        return str === rTotal
      })

      if (filtered.length > 0) {
        return
      }

      answer.push(result)

      console.log('answer', answer)
      for (let i = 0; i < answer.length; i++) {
        for (let j = i + 1; j < answer.length; j++) {
          for (let p = 0; p < maxLen; p++) {

            if (answer[i][p] > answer[j][p]) {
              const temp = answer[j]
              answer[j] = answer[i]
              answer[i] = temp
              break
            }
          }
        }
      }
      console.log('-answer---', answer)
      return
    }

    if (maxLen < result.length) {
      maxLen = result.length

      // console.log('max=', max)

    }

    // else if (max < result.length) {
    //   max = result.length
    //   answer = [...result]
    //   console.log('- big max---', max)
    //   console.log('-result---', result)
    //   console.log('-answer---', answer)
    // }

    for (let j = idx; j < cookies.length; j++) {
      for (let i = j + 1; i < cookies.length; i++) {
        // console.log('----result[result.length - 1]', result,
        //     result[result.length - 1])
        // console.log('----cookies[i]', cookies[i])
        if (result[result.length - 1] < cookies[i]) {
          // console.log('eat for  cookies[i]', cookies[i], i)
          eat([...result, cookies[i]], i,)
        } else {
          // console.log('jump to next', cookies[i], i)
          eat(result, i, false)
        }
      }
    }
  }

  for (let i = 0; i < cookies.length; i++) {
    // console.log('--------------i', i)
    for (let j = i + 1; j < cookies.length; j++) {
      if (cookies[i] < cookies[j]) {
        eat([cookies[i], cookies[j]], j,)
      }
    }
    // console.log(i, 'finish answer', answer)
  }

  return answer[k - 1]
}

console.log(solution([1, 4, 2, 6, 5, 3], 2))
