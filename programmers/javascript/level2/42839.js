//https://school.programmers.co.kr/learn/courses/30/lessons/42839
//소수 찾기
//해답: https://velog.io/@9ummy/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Level-2-%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0-JavaScript
//소수 찾는 법: https://velog.io/@loocia1910/javascript%EC%97%90%EC%84%9C-%EC%86%8C%EC%88%98Prime-number-%EA%B5%AC%ED%95%98%EA%B8%B0
function solution(numbers) {
  const splited = numbers.split('');
  // console.log('splited', splited);
  const answer = new Set();

  function isPrime(str) {
    const num = Number(str);
    if (num < 2) {
      return false;
    }

    if (num === 2) {
      return true;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  function getPermutation(numbersArray, fixedNumber) {
    // console.log('getPermutation---', numbersArray, fixedNumber);
    if (!numbersArray.length) {
      // console.log('return===');
      return;
    }

    for (let i = 0; i < numbersArray.length; i++) {
      const temp = [...numbersArray];
      temp.splice(i, 1);
      // console.log('numbersArray[i]', numbersArray[i]);
      const target = fixedNumber + numbersArray[i];
      // console.log('target', target);
      if (isPrime(Number(target))) {
        answer.add(Number(target));
      }

      getPermutation(temp, target);
    }
  }

  getPermutation(splited, '');
  // console.log(answer);
  return answer.size;
}

console.log(solution('123')); //15
// console.log(solution('17')); //3  [7, 17, 71]
// console.log(solution('011')); //2  [11, 101]
