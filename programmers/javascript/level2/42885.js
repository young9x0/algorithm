//https://school.programmers.co.kr/learn/courses/30/lessons/42885
//구명보트
//해답: https://velog.io/@eldoradodo/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JavaScript-%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  for (let i = 0, j = people.length - 1; i <= j; i++) {
    console.log('i', i);
    console.log('j', j);
    console.log('p i', people[i]);
    console.log('p j', people[j]);
    if (people[i] + people[j] <= limit) {
      j--;
    }
    answer++;
  }
  return answer;
}

// console.log(solution([70, 50, 80, 50], 100)); //3
console.log(solution([70, 80, 90], 100)); //3
