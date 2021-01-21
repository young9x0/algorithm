function solution(strings, n) {
    strings.sort((p, c) => {
        return strings.sort((p, c) => p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n]));
    });

};

function solution(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);

        const chr2 = b.charAt(n);
        console.log('chr1', chr1, chr2, (chr1 > chr2));
        console.log('chr2', chr1, chr2, (chr1 < chr2));
        // console.log('(a > b)', a, b, (a > b));
        // console.log('(a < b)', a, b, (a < b));
        if (chr1 == chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    })
}
function solution(strings, n) {
    var answer = [];
    for (var i = 0; i < strings.length; i++) {
        var chu = strings[i][n];
        strings[i] = chu + strings[i];
    }

    strings.sort();
    console.log(strings);
    for (var j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], "");

        answer.push(strings[j])
    }

    return answer;
}
console.log(solution(['bed', 'aun', 'car'], 1));

function solution(s) {


    return s.split('').sort((p, c) => {
        console.log(c.charCodeAt(), p.charCodeAt(), c.localeCompare(), p.localeCompare());
        return c.charCodeAt() - p.charCodeAt()
    }).join('');

}
console.log(solution("Abcdefg"));