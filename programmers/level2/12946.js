//https://school.programmers.co.kr/learn/courses/30/lessons/12946
//하노이의 탑
//해설: https://brunch.co.kr/@younggiseo/139
//youtube 해설: https://youtu.be/vq7dpFWpwAE?si=IfU2aYgzGb5zY8xP
//1. [1,2], 1->2, 1번에 있는 [1, 2]를 2번 기둥으로 이동한다.
//2. [3], 1->3, 1번에 있는 [3]를 3번 기둥으로 이동한다.
//3. [1,2], 2->3, 2번에 있는 [1, 2]를 3번 기둥으로 이동한다.
//
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
      //1. 가장 아래 원반을 움직이기 위해, 나머지 원반들이 가장 아래 원반이 이동하고자 하는 목적지를 제외한 한 곳으로 이동한다.
      hanoi(num - 1, from, via, to);

      console.log('answer', answer);
      console.log('[move] from:', from, '-> to:', to, '[', from, ',', to, ']');
      //2. 가장 아래 원반을 원하는 목적지로 이동한다.
      answer.push([from, to]);

      //3. 나머지 원반들이 가장 아래 원반이 이동한 목적지로 이동한다.
      console.log('[move] remain disks last:', num, 'from', from, 'to', to, 'via', via);
      hanoi(num - 1, via, to, from);
    }
  }

  hanoi(n, 1, 3, 2);
  return answer;
}

console.log(solution(4));

//n=4
// [
//1. 가장 아래 원반=4, 나머지 원반들=(1,2,3) 일 때 (1,2,3) 이동
    //1. 가장 아래 원반=3, 나머지 원반들=(1,2) 일 때 (1,2) 이동
    //1. (1) = [ 1, 2 ], (2) = [ 1, 3 ],  (1) = [ 2, 3 ], -> [(3,4),(),(1,2)]
  //2. 가장 아래 원반=3 이동
  //2. (3) = [ 1, 2 ],  -> [(4),(3),(1,2)]
    //3. (1,2) 이동
    //3. (1) = [ 3, 1 ], (2) = [ 3, 2 ], (1) = [ 1, 2 ], -> [(4),(1,2,3),()]

//2. 가장 아래 원반=4 이동
//2. (4) = [ 1, 3 ], -> [(),(1,2,3),(4)]

    //1. 가장 아래 원반=3, 나머지 원반들=(1,2) 일 때 (1,2) 이동
    //1. (1) = [ 2, 3 ], (2) = [ 2, 1 ], (1) = [ 3, 1 ], -> [(1,2),(3),(4)]
  //2. 가장 아래 원반=3 이동
  //2. (3) = [ 2, 3 ], -> [(1,2),(),(3,4)]
    //3. (1,2) 이동
    //3. (1) = [ 1, 2 ], (2) = [ 1, 3 ], (1) = [ 2, 3 ] -> [(),(),(1,2,3,4)]
// ]
