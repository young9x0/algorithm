//https://school.programmers.co.kr/learn/courses/30/lessons/72412
// 순위 검색
//해법: https://youngslog.medium.com/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%88%9C%EC%9C%84%EA%B2%80%EC%83%89-javascript-a3fc9565bfa7

function binarySearch(arr, target) {// target의 index 반환
  // 쿼리 결과가 없을 경우 예외 처리

  if (!arr) {
    return 0;
  }
  let start = 0;// index가 아닌 value
  let end = arr.length;
  let mid = Math.floor((start + end) / 2)
  //1, 2, 3, 4, |  5, 6, 7, 8
  // mid 4
  // arr[mid] 5

  while (start <= end) {
    console.log('----------')
    console.log('arr', arr)
    console.log('target', target)
    console.log('start', start)
    console.log('end', end)
    console.log('mid', mid)
    console.log('arr[mid]', arr[mid])

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1
    }

    mid = Math.floor((start + end) / 2)
    console.log('change mid=')
    console.log('start', start)
    console.log('end', end)
    console.log('mid', mid)
    console.log('arr[mid]', arr[mid])
    //  5, 6 |  7, 8
    // mid 6
    // arr[mid] 7

    // 5 | 6
    // mid 5
    // arr[mid] 6
  }

  //target과 arr[mid]이 일치하는 값을 찾지 못했을 때
  console.log('final mid', mid)
  return mid + 1
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6))
const getInfos = (info) => {
  const infos = {}; // object를 생성해줄 거에요.
  info.forEach(infoString => { // 이제 object에 `info`를 처리해줘야겠죠?!
    const arr = infoString.split(" "); // 먼저 " " 기준으로 string을 분리해줍시다.
    const score = parseInt(arr.pop()); // 정수로 바꿔줄 거에요.
    const key = arr.join(""); // key를 javabackendjuniorpizza와 같은 형태로 해줄 거에요.
    if (infos[key]) {
      infos[key].push(score)
    } else {
      infos[key] = [score];
    } // [150]의 형태로 배열에 점수를 넣어줘요.
  });
  for (const key in infos) {
    // 다 처리된 이후에는 각 키의 점수 배열을 정렬해줍니다.
    // 이건 이분탐색을 위한 거에요.
    infos[key].sort((a, b) => a - b);
  }
  return infos;
}

const getResult = (infos, query, score) => {
  // 키들을 배열 형태로 갖고 옵시다.
  const infosKey = Object.keys(infos);
  console.log('getResult', getResult)
  console.log('query', query)
  console.log('score', score)
  console.log('infosKey', infosKey)
  // 여기서 이제 키들에 대해 쿼리 조건을 만족하는 것들을 필터링해서 배열로 반환하고 (filter)
  // reduce로 전체 점수 배열의 길이값 - 이분 탐색 결과 인덱스 값을 해줍니다.
  // 그러면 결국 값이 같거나 큰 애들의 수만큼 값이 나오겠죠? (정렬되어 있으니까요)
  // 이를 누산해줍니다.
  const filteredInfosKey = infosKey
  .filter(key => query.every(v => key.includes(v)))

  console.log('filteredInfosKey', filteredInfosKey)
  return filteredInfosKey.reduce(
      (acc, key) => {
        console.log('key', key)
        console.log('infos[key].length', infos[key].length)
        // console.log('binarySearch(infos[key], score)',
        //     binarySearch(infos[key], score))
        return acc + infos[key].length -
            binarySearch(infos[key], score)
      },
      0);
}

function solution(info, query) {
  let answer = [];
  const infos = getInfos(info);
  // console.log('infos', infos)

  const mappedQuery = query
  .map(q => {
        const splitQuery = q
        .split(/ and | |-/i) //' and '와 ' '와 '-'이 들어가 있는 친구들 기준으로 split 처리해줘요.
        // console.log('splitQuery', splitQuery)
        return splitQuery.filter(v => v !== "")
      } // `split`에 의해 값이 "" 처리가 된 친구들을 없애줍니다.
  ) // 쿼리 조건들을 필터링해줄 거에요.

  // console.log('mappedQuery', mappedQuery)
  mappedQuery.forEach(query => {
    const score = query.pop();
    const result = getResult(infos, query, score);
    answer.push(result) // getResult로 인해 누산된 결과값을, answer에 넣어줍시다.
  })
  return answer
}

console.log(
    solution(
        ["java backend junior pizza 150", "python frontend senior chicken 210",
          "python frontend senior chicken 150", "cpp backend senior pizza 260",
          "java backend junior chicken 80", "python backend senior chicken 50"],
        ["java and backend and junior and pizza 100",
          "python and frontend and senior and chicken 200",
          "cpp and - and senior and pizza 250",
          "- and backend and senior and - 150", "- and - and - and chicken 100",
          "- and - and - and - 150"])
)
//[1,1,1,1,2,4]
