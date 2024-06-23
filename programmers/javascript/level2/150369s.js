//택배 배달과 수거하기 정답
function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let [dIndex, pIndex] = [n - 1, n - 1];

  while (dIndex >= 0 || pIndex >= 0) {
    console.log('---')
    while (deliveries[dIndex] === 0 && dIndex >= 0) {
      // console.log('dIndex', dIndex)
      // console.log('deliveries[dIndex]', deliveries[dIndex])
      dIndex -= 1;
    }
    console.log('start dIndex', dIndex)
    while (pickups[pIndex] === 0 && pIndex >= 0) {
      // console.log('pickups[dIndex]', pickups[dIndex])
      // console.log('pIndex', pIndex)
      pIndex -= 1;
    }
    console.log('start pIndex', pIndex)

    let [dCap, pCap] = [cap, cap];
    answer += Math.max(dIndex + 1, pIndex + 1) * 2;
    while (dCap > 0 && dIndex >= 0) {
      console.log('deliveries[dIndex], dIndex', deliveries[dIndex], dIndex)
      console.log('dCap', dCap)
      if (deliveries[dIndex] > 0) {
        deliveries[dIndex] -= 1;
        dCap -= 1;
      } else {
        dIndex -= 1;
      }
    }
    while (pCap > 0 && pIndex >= 0) {
      console.log('pickups[pIndex], pIndex', pickups[pIndex], pIndex)
      console.log('pCap', pCap)
      if (pickups[pIndex] > 0) {
        pickups[pIndex] -= 1;
        pCap -= 1;
      } else {
        pIndex -= 1;
      }
    }

    console.log('final dIndex, final pIndex', dIndex, pIndex)
  }
  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0], 16))
// console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0], 30))
