//https://school.programmers.co.kr/learn/courses/30/lessons/155651
// 호텔 대실
function solution(book_time) {
  let convertToNumber = book_time.map((book) => {
    return [book[0].split(':').map(Number), book[1].split(':').map(Number)];
  });
  // console.log('convertToNumber', convertToNumber);
  let roomCount = 0;
  const sortedBookTime = convertToNumber.sort((a, b) => {
    if (a[0][0] === b[0][0]) {
      if (a[0][1] > b[0][1]) {
        return 1;
      }
      if (a[0][1] < b[0][1]) {
        return -1;
      }
      if (a[0][1] === b[0][1]) {
        roomCount++;
        return;
      }
    }

    if (a[0][0] > b[0][0]) {
      return 1;
    }
    if (a[0][0] < b[0][0]) {
      return -1;
    }
    if (a[0][0] === b[0][0]) {
      roomCount++;
    }
  });
  // console.log('sortedBookTime', sortedBookTime);
  // console.log('roomCount', roomCount);

  if (book_time.length === roomCount + 1) {
    return roomCount + 1;
  }

  for (let i = 0; i < book_time.length; i++) {
    let lastTime = convertToNumber[i][1];
    // console.log('----lastTime', lastTime);
    for (let j = i + 1; j < book_time.length; j++) {
      // console.log('convertToNumber[j][0]', convertToNumber[j][0]);
      if (lastTime[0] < convertToNumber[j][0][0]) {
        lastTime = convertToNumber[j][0];
        convertToNumber[j][0] = convertToNumber[i][0];
        // console.log('time check', convertToNumber);
        roomCount--;
        continue;
      } else if (lastTime[0] === convertToNumber[j][0][0] && lastTime[1] + 10 <= convertToNumber[j][0][1]) {
        lastTime = convertToNumber[j][0];
        convertToNumber[j][0] = convertToNumber[i][0];
        // console.log('minute check', convertToNumber);
        roomCount--;
        continue;
      }
    }
    roomCount++;
    // console.log('roomCount', roomCount);
  }

  return roomCount;
}

// console.log(
//   solution([
//     ['15:00', '17:00'],
//     ['16:40', '18:20'],
//     ['14:20', '15:20'],
//     ['14:10', '19:20'],
//     ['18:20', '21:20'],
//   ]),
// ); //3
//
// console.log(
//   solution([
//     ['09:10', '10:10'],
//     ['10:20', '12:20'],
//   ]),
// ); //1
//
console.log(
  solution([
    ['10:20', '12:30'],
    ['10:20', '12:30'],
    ['10:20', '12:30'],
  ]),
); //3
