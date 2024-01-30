// https://school.programmers.co.kr/learn/courses/30/lessons/42577
// 전화번호 목록
// 해답: https://velog.io/@eldoradodo/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JavaScript-%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8-%EB%AA%A9%EB%A1%9D
function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    // console.log('i', i);
    if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) {
      return false;
    }
  }

  return true;
}

// console.log(solution(['119', '97674223', '1195524421'])); //false
// console.log(solution(['123', '456', '789'])); //true
console.log(solution(['12', '123', '1235', '567', '88'])); //false
