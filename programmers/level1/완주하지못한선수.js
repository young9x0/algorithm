function solution(participant, completion) {
  completion.sort().map((c, j) => {
    participant.sort().map((p, i) => {
      if (p == c) {
        participant.splice(i, 1);
      }
    });
  });
  let answer = participant[0];
  return answer;
}
function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();
  for (let i in participant) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

function solution(participant, completion) {
  var dic = completion.reduce((obj, t) => {
    return (obj[t] = obj[t] ? obj[t] + 1 : 1), obj;
  });
  return participant.find((t) => {
    console.log(t);
    if (dic[t]) dic[t] = dic[t] - 1;
    else return true;
  });
}

const solution = (p, c) => {
  p.sort();
  c.sort();
  while (p.length) {
    let pp = p.pop();

    if (pp !== c.pop()) return pp;
  }
};
console.log(solution(['a', 'b', 'c', 'a'], ['b', 'a', 'c']));
