function solution(s) {

    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 !== 0 ? 1 : 2);

}

solution("qwer");
console.log(solution("qwer"));

function solution(s) {
    var length = s.length;
    var answer = '';

    if (!(s.length > 0 && s.length < 100)) {
        return;
    }

    if (length % 2 != 0) {
        answer = s.slice(length / 2, length / 2 + 1);
        console.log(length / 2, length / 2 + 1);
    } else {
        answer = s.slice(length / 2 - 1, length / 2 + 1);
        console.log(length / 2 - 1, length / 2 + 1);
    }

    return answer;

}

var s = 'abcd';
console.log(solution(s));