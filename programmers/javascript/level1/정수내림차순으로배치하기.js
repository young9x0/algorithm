function solution(n) {
    const newN = n + "";
    const newArr = newN.split('').sort().reverse().join('');
    console.log(typeof +newArr);
    return +newArr;
}
function solution(n) {
    var r = 0, e = 0, arr = [];

    do {
        e = n % 10;
        //console.log(e);
        // 정렬
        if (arr.length == 0) {
            arr.push(e);
            console.log('1', arr);
        }
        else for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] <= e) {
                console.log('a', arr[i], 'e', e, arr.splice(i, 0, e)); break;
            }
            if (i == len - 1) {

                arr.push(e);
                console.log('3', arr);
            }
        }
    } while (n = Math.floor(n / 10), n > 0);

    return parseInt(arr.join(""));
}

function solution(n) {
    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
    return n.toString().split('').sort((a, b) => b - a).join('').toNumber();

}

function solution(n) {
    var answer = "";
    n = n + "";
    var emptyArray = [];
    for (var i = 0; i < n.length; i++) {
        emptyArray.push(n[i]);
    }
    for (var j = 0; j < emptyArray.length; j++) {
        if (emptyArray[j] < emptyArray[j + 1]) {
            var temp = emptyArray[j];
            emptyArray[j] = emptyArray[j + 1];
            emptyArray[j + 1] = temp;
            j = -1;
        }
        console.log(emptyArray);
    }
    for (var k = 0; k < emptyArray.length; k++) {
        answer += emptyArray[k];
    }
    answer = Number(answer);
    return answer;
}

console.log(solution(118372));