//https://school.programmers.co.kr/learn/courses/30/lessons/42883
//큰 수 만들기

function solution(number, k) {
  let answer = '';
  const splited = number.split('');

  function joinArr(fixedStr, idx) {
    // console.log('joinArr fixedStr', fixedStr);
    if (fixedStr.length === splited.length - k) {
      // console.log('===answer', answer);
      return (answer = String(Math.max(Number(answer), Number(fixedStr))));
    }

    for (let i = idx + 1; i < splited.length; i++) {
      joinArr(fixedStr + splited[i], i);
    }
  }

  for (let i = 0; i < splited.length; i++) {
    // console.log('===i', i);
    for (let j = i + 1; j < splited.length; j++) {
      joinArr(splited[i] + splited[j], j);
    }
  }

  // console.log('answer', answer);
  return answer;
}

// console.log(solution('1924', 2)); //"94"
// console.log(solution('1231234', 3)); //"3234"
console.log(solution('4177252841', 4)); //"775841"
