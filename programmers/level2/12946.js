//https://school.programmers.co.kr/learn/courses/30/lessons/12946
//하노이의 탑
//해설: https://brunch.co.kr/@younggiseo/139
function solution(n) {
  const answer = [];
  let count = 0;
  function hanoi(num, from, to, via) {
    count++;
    console.log(count, 'hanoi disks:', num, 'from', from, 'to', to, 'via', via);
    if (num === 1) {
      console.log('only one');
      console.log('answer', answer);
      console.log('[move] from:', from, '-> to:', to, '[', from, ',', to, ']');
      return answer.push([from, to]);
    } else {
      console.log('[move] last:', num, 'from', from, 'to', to, 'via', via);
      //가장 아래 원반을 움직이기 위해, 위에 있는 원반이 가장 아래 원반이 이동하고자 하는 목적지를 제외한 한 곳으로 이동한다.
      hanoi(num - 1, from, via, to);

      console.log('answer', answer);
      console.log('[move] from:', from, '-> to:', to, '[', from, ',', to, ']');
      //가장 아래 원반을 원하는 목적지로 이동한다.
      answer.push([from, to]);

      console.log('[move] remain disks last:', num, 'from', from, 'to', to, 'via', via);
      hanoi(num - 1, via, to, from);
    }
  }

  hanoi(n, 1, 3, 2);
  return answer;
}

console.log(solution(3));

//n=3
// 1 hanoi disks: 3 from 1 to 3 via 2
//   [move] last: 3 from 1 to 3 via 2
// 2 hanoi disks: 2 from 1 to 2 via 3
//   [move] last: 2 from 1 to 2 via 3
// 3 hanoi disks: 1 from 1 to 3 via 2
// only one
// answer []
//   [move] from: 1 -> to: 3 [ 1 , 3 ]
// answer [ [ 1, 3 ] ]
//   [move] from: 1 -> to: 2 [ 1 , 2 ]
//   [move] remain disks last: 2 from 1 to 2 via 3
// 4 hanoi disks: 1 from 3 to 2 via 1
// only one
// answer [ [ 1, 3 ], [ 1, 2 ] ]
//   [move] from: 3 -> to: 2 [ 3 , 2 ]
// answer [ [ 1, 3 ], [ 1, 2 ], [ 3, 2 ] ]
//   [move] from: 1 -> to: 3 [ 1 , 3 ]
//   [move] remain disks last: 3 from 1 to 3 via 2
// 5 hanoi disks: 2 from 2 to 3 via 1
//   [move] last: 2 from 2 to 3 via 1
// 6 hanoi disks: 1 from 2 to 1 via 3
// only one
// answer [ [ 1, 3 ], [ 1, 2 ], [ 3, 2 ], [ 1, 3 ] ]
//   [move] from: 2 -> to: 1 [ 2 , 1 ]
// answer [ [ 1, 3 ], [ 1, 2 ], [ 3, 2 ], [ 1, 3 ], [ 2, 1 ] ]
//   [move] from: 2 -> to: 3 [ 2 , 3 ]
//   [move] remain disks last: 2 from 2 to 3 via 1
// 7 hanoi disks: 1 from 1 to 3 via 2
// only one
// answer [ [ 1, 3 ], [ 1, 2 ], [ 3, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 3 ] ]
//   [move] from: 1 -> to: 3 [ 1 , 3 ]
//   [
//   [ 1, 3 ], [ 1, 2 ],
//     [ 3, 2 ], [ 1, 3 ],
//     [ 2, 1 ], [ 2, 3 ],
//     [ 1, 3 ]
//   ]

//n=4
// [
//   [ 1, 2 ], [ 1, 3 ],
//   [ 2, 3 ], [ 1, 2 ],
//   [ 3, 1 ], [ 3, 2 ],
//   [ 1, 2 ], [ 1, 3 ],
//   [ 2, 3 ], [ 2, 1 ],
//   [ 3, 1 ], [ 2, 3 ],
//   [ 1, 2 ], [ 1, 3 ],
//   [ 2, 3 ]
// ]
