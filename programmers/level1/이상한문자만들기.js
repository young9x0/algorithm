function solution(s) {
    let arr = [], p = [];
    s.split(' ').forEach((el) => {
        arr = el.split('').map((v, i) => {
            if (i % 2 === 0) {
                return v.toUpperCase();
            } else {
                return v.toLowerCase();
            }
        });
        p.push(arr.join(''));
    });
    return p.join(' ');


}
const solution = (s) => {

    return s.toUpperCase().replace(/(\w)(\w)/g, function (a) { return a[0].toUpperCase() + a[1].toLowerCase(); })
};
function solution(s) {

    return s.split(' ').map(w => (
        w.split('').map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase())).join('')
    )).join(' ');
}
function solution(s) {
    let answer = '';
    for (let word of s.split(' ')) {
        console.log(word);
        for (let i in word) {
            console.log(i);
            answer += word[i][parseInt(i) % 2 == 0 ? 'toUpperCase' : 'toLowerCase']();
        }
        // console.log(answer);
        answer += ' ';
    };
    // console.log(answer.split(''));
    return answer.slice(0, -1);
}
function solution(s) {
    let result = '', num = 0;
    for (let i in s) {
        if (s.charAt(i) == " ") {
            num = 0;
            result += ' ';
            continue;
        } else if (num % 2 == 0) {
            result += (s.charAt(i)).toUpperCase();
            num++;
        } else {
            result += (s.charAt(i)).toLowerCase();
            num++;
        }

    }
    return result;
}

console.log(solution("try hello world"));