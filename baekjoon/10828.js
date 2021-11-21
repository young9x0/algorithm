function solution(input) {
  let answer = "";
  const stack = [];
  const push = (val) => stack.push(val);
  const size = () => (answer += `\n` + stack.length);
  const pop = () =>
    !!size ? (answer += `\n` + stack.shift()) : (answer += `\n` + -1);
  const empty = () => (size ? (answer += `\n` + 1) : (answer += `\n` + 0));
  const top = () =>
    !!size ? (answer += `\n` + stack[0]) : (answer += `\n` + -1);

  input.map((val) => {
    if (!parseInt(val)) {
      const inputStr = val?.slice(0, 2);
      const value = val.replace(/[^0-9]/g, " ");
      //   console.log("inputStr", inputStr);
      //   console.log("value", value);

      !!inputStr && inputStr === "pu"
        ? push(parseInt(value))
        : inputStr === "si"
        ? size()
        : inputStr === "po"
        ? pop()
        : inputStr === "em"
        ? empty()
        : inputStr === "to" && top();
    }
  });
  //   console.log("stack", stack);
  return answer;
}
// const input = ["3", "push 1", "push 2", "top"];
// console.log("answer", solution(input));

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    solution(input); // 이 부분에서 함수를 실행하고 정답을 출력한다.
    process.exit();
  });
