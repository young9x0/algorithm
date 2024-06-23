function solution(s, n) {

    let a = s.split('').map(v => v.charCodeAt() + n);
    let b = '';

    a.map((v, i) => {

        if (v > 90 && v < 97) {
            a[i] = v - 90 + 64;
        }
        if (v > 122) {
            a[i] = v - 122 + 96;
        }
        if (v < 65) a[i] = 32;

        b += String.fromCharCode(a[i]);


    });
    return b;
}
function solution(s, n) {
    return s.split('').map((l) => {
        console.log(l.charCodeAt() <= 90);
        return l === ' '
            ? l
            : l.charCodeAt() + n > 122 || (l.charCodeAt() <= 90 && l.charCodeAt() + n > 90)
                ? String.fromCharCode((l.charCodeAt() + n) - 26)
                : String.fromCharCode(l.charCodeAt() + n);
    }).join('');
}
console.log(solution("a B z", 4));