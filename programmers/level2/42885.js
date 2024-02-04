//https://school.programmers.co.kr/learn/courses/30/lessons/42885
//구명보트

function solution(people, limit) {
  let answer = 0;

  const temp = [...people];
  temp.sort((a,b)=> b-a)
  let weight = temp.shift();
  answer++;
  let idx = 0;
  while (temp.length > 0) {
    // console.log('temp', temp);
    if (idx === temp.length) {
      answer++;
      idx = 0;
      weight = temp.shift();
      // console.log('----');
    }
    // console.log('weight', weight);
    if (weight + temp[idx] <= limit) {
      const [el] = temp.splice(idx, 1);
      // console.log('el', el);
      weight += el;
      // console.log('add', weight);
    } else {
      idx++;
      // console.log('next', idx);
    }
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100)); //3
console.log(solution([70, 80, 50], 100)); //3
