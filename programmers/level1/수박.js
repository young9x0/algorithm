function waterMelon(n) {

    return Array(n).fill().map((v, i) => {
        if (i % 2 === 0) {
            return v = '수';
        } else {
            return v = '박';
        }
    }).join('');
}
function waterMelon(n) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += i % 2 == 0 ? "수" : "박";
    }
    return result;
}
const waterMelon = n => {
    console.log('수박'.repeat(n / 2));
    return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
}
function waterMelon(n) {
    var result = "수박";
    console.log(result.repeat(n - 1).substring(0, 3));
    result = result.repeat(n - 1).substring(0, n);
    //함수를 완성하세요

    return result;
}

console.log(waterMelon(4));