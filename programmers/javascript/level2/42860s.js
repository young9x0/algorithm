//https://school.programmers.co.kr/learn/courses/30/lessons/42860
//탐욕법(Greedy) > 조이스틱
//헤딥:https://chamdom.blog/pg2-42860/
//해설:https://han-joon-hyeok.github.io/posts/programmers-joystick/
function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;
  const strlist = [...name]
  const changeCharToCode = (char) => {
    return char.charCodeAt();
  };

  const codeTable = {
    A: changeCharToCode("A"),
    Z: changeCharToCode("Z") + 1,
  };

  const countChangingChar = (char) => {
    const currCode = changeCharToCode(char);
    return Math.min(currCode - codeTable["A"], codeTable["Z"] - currCode);
  };

  strlist.forEach((str, idx) => {
    // console.log('str', str)
    // console.log('idx', idx)
    answer += countChangingChar(str);
    let nextIdx = idx + 1;

    // 연속되는 A의 개수 count
    while (nextIdx < name.length && name[nextIdx] === 'A') {
      nextIdx++;
    }

    min_move = Math.min(
        min_move,
        idx * 2 + name.length - nextIdx,// A 만나기 전까지 오른쪽으로 이동 후 만나면 왼쪽으로 가기
        idx + 2 * (name.length - nextIdx),// A 만나기 전까지 왼쪽으로 이동 후 만나면 오른쪽으로 가기
    );
  });

  return answer + min_move;
}

// console.log(solution('JAZ'))
// console.log(solution('JEROEN'))
// console.log(solution('JAN'))
console.log(solution('BBBBAAAABA'))
