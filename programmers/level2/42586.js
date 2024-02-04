//https://school.programmers.co.kr/learn/courses/30/lessons/42586
//기능개발

function solution(progresses, speeds) {
  let answer = [];

  const temp = [];
  progresses.forEach((progress, idx) => {
    let day = 0;
    while (progress + day < 100) {
      // console.log('progress+day',progress+day)
      day += speeds[idx];
      // console.log('day',day)
    }
    temp.push(day / speeds[idx]);
  });
  // for (let i = 0; i < 3; i++) {
  // }
  // console.log('temp', temp);
  let first = temp.shift();
  let deployLen = 1;
  while (temp.length > 0) {
    if (first > temp[0]) {
      temp.shift();
      deployLen++;
      // console.log('add');
    } else {
      // console.log('change', deployLen);
      answer.push(deployLen);
      deployLen = 1;
      first = temp.shift();
    }
  }
  answer.push(deployLen);

  return answer;
}

// console.log(solution([93, 30, 55], [1, 30, 5])); //[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99]		, [1, 1, 1, 1, 1, 1]		))//[1,3,2]
