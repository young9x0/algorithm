//https://school.programmers.co.kr/learn/courses/30/lessons/42578
//의상
//해답: https://supersfel.tistory.com/515

function solution(clothes) {
  const map = new Map();
  for (const [name, type] of clothes) {
    const tCount = map.get(type);
    if (tCount) {
      map.set(type, tCount + 1);
    } else {
      map.set(type, 1);
    }
  }

  let answer = 1;
  for (const [key, val] of map) {
    //안입는 경우도 옵션에 더해주기
    answer *= val + 1;
    // console.log('answer', answer);
  }
  //한벌도 안입는 경우 빼주기
  return answer - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]),
); //5
// console.log(
//   solution([
//     ['crow_mask', 'face'],
//     ['blue_sunglasses', 'face'],
//     ['smoky_makeup', 'face'],
//   ]),
// ); //3
// console.log(
//     solution([
//       ['crow_mask', 'face'],
//       ['blue_sunglasses', 'face'],
//       ['smoky_makeup', 'face'],
//       ['yellow_hat', 'headgear'],
//       ['blue_sunglasses', 'eyewear'],
//       ['green_turban', 'headgear'],
//     ]),
// ); //3
