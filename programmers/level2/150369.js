//택배 배달과 수거하기
function solution(cap, n, deliveries, pickups) {
  const deliveriesTotal = deliveries.reduce((acc, cur) => acc + cur, 0)
  const pickupsTotal = pickups.reduce((acc, cur) => acc + cur, 0)

  let dRemain = deliveriesTotal
  let dSum = deliveries[n - 1]
  let dCount = 0
  for (let i = 0; i < n - 1; i++) {
    let before = deliveries[n - 2 - i]
    if (dSum + before <= cap) {
      dSum += before
    } else {
      dRemain -= dSum
      dSum = dSum + before - cap
      dCount += (n - i + 1) * 2
    }

    if (i === n - 2) {
      dCount += (n - i + 1) * 2
    }
  }

  let pRemain = pickupsTotal
  let pSum = pickups[n - 1]
  let pCount = 0
  for (let i = 0; i < n - 1; i++) {
    let before = pickups[n - 2 - i]
    if (pSum + before <= cap) {
      pSum += before
    } else {
      pRemain -= pSum
      pSum = pSum + before - cap
      pCount += (n - i + 1) * 2
    }

    if (i === n - 2) {
      pCount += (n - i + 1) * 2
    }
  }
  return Math.max(dCount, pCount);
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0], 16))
// console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0], 30))
