function solution(s) {
    let a = s.findIndex((v) => v === 'Kim');

    console.log(b);
}

function findKim(seoul) {
    var idx = 0;
    for (var i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim') {
            idx += i;
            break;
        }
    }

    return "김서방은 " + idx + "에 있다";
}

function solution(s) {
    return `김서방은 ${s.indexOf("Kim")}에 있다`;
}
function solution(s) {
    var idx = 0;


    var findSize = s.length;
    for (var i = 1; findSize > i; i++) {
        if (s[i] == "Kim") {
            idx = i;
        }
    }
    return "김서방은 " + idx + "에 있다";
}
console.log(solution(['Kim', 'Jane', 'Cho',]));