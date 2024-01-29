// https://school.programmers.co.kr/learn/courses/30/lessons/42577
// 전화번호 목록
function solution(phone_book) {
  let answer = true;

  for (let i = 0; i < phone_book.length; i++) {
    // console.log('i', i);
    for (let j = i + 1; j < phone_book.length; j++) {
      // console.log('j', j);

      for (let k = 0; k < phone_book[i].length; k++) {
        // console.log('phone_book[i][k]', phone_book[i][k]);
        // console.log('phone_book[j][k]', phone_book[j][k]);
        if (phone_book[i][k] !== phone_book[j][k]) {
          // console.log('k', k);
          // console.log('break');
          break;
        } else {
          if (k === phone_book[i].length - 1) {
            // console.log('return');
            return (answer = false);
          }
          // console.log('continue');
          continue;
        }
      }
    }
  }

  return answer;
}

// console.log(solution(['119', '97674223', '1195524421'])); //false
// console.log(solution(['123', '456', '789'])); //true
console.log(solution(['12', '123', '1235', '567', '88'])); //false
