function solution(s) {
    let a = s.split('');
    let b = 0;
    let c = 0;
    a.map((v) => {

        if (v === 'p') b++;
        if (v === 'P') b++;

        if (v === 'y') c++;
        if (v === 'Y') c++;

    });
    if (b === c) {
        return true;
    } else {

        return false;
    }
}
function solution(s) {
    let a = s.match(/p/ig);
    let b = s.match(/y/ig);
    console.log(a, b);
    if (a.length === b.length) {
        return true;
    } else {

        return false;
    }

}
function solution(s) {
    console.log(!s);
    if (s.match(/p/ig)?.length === s.match(/y/ig)?.length) {

        return true;
    }
}

function solution(s) {
    console.log(s.toUpperCase().split('Y'));

    // return s.toUpperCase().split('P').length ===s.toUpperCase().split('Y').length;

}
console.log(solution("pPoooyY"));//true
console.log(solution("Pyy"));//false

function solution(s) {
    console.log(s.replace(/p/gi, ''));

    return s.replace(/p/gi, '').length == s.replace(/y/gi, '').length;

}
console.log(solution("abc"));//true
