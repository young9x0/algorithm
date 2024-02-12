// https://school.programmers.co.kr/learn/courses/30/lessons/131701
// 연속 부분 수열 합의 개수

function solution(elements) {
  const sumSet = new Set();

  function sum(list) {
    // console.log('list', list);
    for (let i = 0; i < elements.length; i++) {
      let prev = list[i];
      sumSet.add(prev);

      for (let j = i + 1; j < elements.length; j++) {
        const sum = prev + list[j];
        // console.log('sum', sum)
        if (!sumSet.has(sum)) {
          sumSet.add(sum);
        }

        prev = sum;
      }
      // console.log('sumSet', sumSet);
    }
  }

  const temp = [...elements];
  for (let i = 0; i < elements.length; i++) {
    const first = temp.shift();
    temp.push(first);
    sum([...temp]);
  }

  return sumSet.size;
}

console.log(solution([7, 9, 1, 1, 4])); //18
