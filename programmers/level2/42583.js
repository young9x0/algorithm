// https://school.programmers.co.kr/learn/courses/30/lessons/42583
// 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
  let time = 0;

  let curCapa = bridge_length;
  const waiting = [...truck_weights];
  let current = [];

  function pushCurrent() {
    const shifted = waiting.shift();
    // console.log('waiting', waiting);
    current.push(shifted);
    // console.log('current', current);
    curCapa--;
    // console.log('curCapa', curCapa);
  }

  for (let i = 0; i < truck_weights.length; i++) {
    // console.log('i', i);
    // console.log('-current', current);
    // console.log('-waiting', waiting);
    //다리에 트럭이 없을 때
    if (current.length === 0 && waiting.length > 0) {
      pushCurrent();
      time++;
    }
    // console.log('time', time);

    while (current.length > 0) {
      // console.log('while current', current);
      const totalWeight = current.reduce((acc, cur) => acc + cur, 0);
      // console.log('totalWeight', totalWeight);

      if (waiting.length > 0 && totalWeight + waiting[0] <= weight) {
        pushCurrent(waiting[0]);
        time++;
        // console.log('add waiting', time);
      } else {
        // console.log('over weight/no waiting curCapa', curCapa);
        time += curCapa;

        // console.log('over weight/no waiting time', time);
        time+= current.length;
        current = [];
        // console.log('reset current', time);

        if (waiting.length > 0 && current.length === 0) {
          // console.log('waiting exist');
          curCapa = bridge_length;
          // console.log('reset  curCapa');
          pushCurrent();
        }
      }
    }
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); //8
// console.log(solution(100, 100, [10])); //101
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); //110
