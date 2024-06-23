function solution(phone_number) {


    let a = phone_number.split('');

    a.map((v, i) => {
        if (i < a.length - 4) {
            a[i] = "*";
        }
    });

    return a.join('');

}


function solution(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}

function solution(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        result += i < s.length - 4 ? "*" : s.charAt(i);
    }

    return result;


}

function solution(s) {
    let a = Array(s.length - 3).join("*");


    let b = s.substring(s.length - 4);
    console.log(b);
    return a + b;
}
function solution(s) {
    var _str = '';
    for (var i = 0; i < s.length - 4; i++) {
        _str += '*';
    }
    var result = s.replace(s.substr(0, s.length - 4), _str);
    return result;
}
function solution(s) {
    console.log(s.slice(-4));
    return "*".repeat(s.length - 4) + s.slice(-4);
}
console.log(solution("01033334444"));
