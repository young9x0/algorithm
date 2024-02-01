// https://school.programmers.co.kr/learn/courses/30/lessons/42587
// 프로세스

function solution(priorities, location) {
  const originIdx = priorities.reduce((acc, cur, idx) => {
    acc[idx] = cur;
    return acc;
  }, {});

  // console.log('originIdx', originIdx)
  const list = [...priorities];
  let keyList = Object.keys(originIdx).map(Number);
  let temp = [list.shift()];
  let keyTemp = [keyList.shift()];

  while (list.length > 0) {
    // console.log('temp', temp);
    // console.log('list', list);
    if (temp[0] >= list[0]) {
      temp.push(list.shift());
      keyTemp.push(keyList.shift());
      // console.log('---temp', temp);
      // console.log('list', list);
    } else {
      list.push(...temp);
      keyList.push(...keyTemp);
      temp = [list.shift()];
      keyTemp = [keyList.shift()];
      // console.log('+++temp', temp);
      // console.log('list', list);
    }
  }

  // console.log('keyTemp',keyTemp)
  return keyTemp.indexOf(location) + 1;
}

console.log(solution([2, 1, 3, 2], 2)); //1
// console.log(solution([1, 1, 9, 1, 1, 1]		, 0))//5
