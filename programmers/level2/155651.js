//https://school.programmers.co.kr/learn/courses/30/lessons/155651
// 호텔 대실
//해답: https://leejams.github.io/%ED%98%B8%ED%85%94%EB%8C%80%EC%8B%A4/
function solution(book_time) {
  let room = [];
  // console.log('book_time', book_time);
  const convertToMinute = ([time, minute]) => {
    return Number(time) * 60 + Number(minute);
  };
  const convertedBookTime = book_time.sort().map(([start, end]) => {
    return [convertToMinute(start.split(':')), convertToMinute(end.split(':'))];
  });
  // sort는 배열에 숫자가 있다면 string으로 변환해서 정렬을 시도함
  // 따라서 숫자 자체를 정렬하려면 함수를 만들어주어야 함
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // convertedBookTime.sort((a, b) => {
  //   if (a[0] > b[0]) {
  //     return 1;
  //   }
  //   if (a[0] < b[0]) {
  //     return -1;
  //   } else {
  //     if (a[1] > b[1]) {
  //       return 1;
  //     }
  //     if (a[1] < b[1]) {
  //       return -1;
  //     }
  //     return 0;
  //   }
  // });

  // console.log('convertedBookTime', convertedBookTime);

  convertedBookTime.forEach(([start, end]) => {
    // console.log('----start', start);
    const findBeforeBookTimeIdx = room.findIndex((checkout) => checkout <= start);
    // console.log('findBeforeBookTimeIdx', findBeforeBookTimeIdx);
    if (findBeforeBookTimeIdx === -1) {
      room.push(end + 10);
    } else {
      room[findBeforeBookTimeIdx] = end + 10;
    }
    // console.log('room', room);
  });

  return room.length;
}

console.log(
  solution([
    ['15:00', '17:00'],
    ['16:40', '18:20'],
    ['14:20', '15:20'],
    ['14:10', '19:20'],
    ['18:20', '21:20'],
  ]),
); //3
//
// console.log(
//   solution([
//     ['09:10', '10:10'],
//     ['10:20', '12:20'],
//   ]),
// ); //1
//
// console.log(
//   solution([
//     ['10:20', '12:30'],
//     ['10:20', '12:30'],
//     ['10:20', '12:30'],
//   ]),
// ); //3
