// https://school.programmers.co.kr/learn/courses/30/lessons/42583
// 다리를 지나는 트럭
// 해답:https://velog.io/@chloeelog/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A4%EB%A6%AC%EB%A5%BC-%EC%A7%80%EB%82%98%EB%8A%94-%ED%8A%B8%EB%9F%AD-JavaScript


function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array(bridge_length).fill(0);
  let bridge_sum = 0;

  time++;
  bridge.shift();
  bridge_sum += truck_weights[0];
  bridge.push(truck_weights.shift());
  console.log('time', time);
  console.log('bridge', bridge);
  console.log('bridge_sum', bridge_sum);
  while (bridge_sum > 0) {
    time++;
    bridge_sum -= bridge.shift(); //[6]
    console.log('time', time);
    console.log('bridge', bridge);
    console.log('bridge_sum', bridge_sum);

    if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
      bridge_sum += truck_weights[0];
      bridge.push(truck_weights.shift()); //[0,6]
      console.log('bridge_sum', bridge_sum);
    } else {
      bridge.push(0); //[6,0]
    }
    console.log('bridge', bridge);
  }

  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); //8
// console.log(solution(100, 100, [10])); //101
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); //110
