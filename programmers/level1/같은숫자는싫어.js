function solution(arr) {
    var answer = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}
solution([1, 1, 3]);

function solution(arr) {
    var answer = [];


    console.log(arr)
    var x = arr[0];
    var j = 0;
    var i = 1;
    while (true) {
        if (i == arr.length + 1) {
            break;
        }
        if (x == arr[i]) {
        } else {
            answer[j] = x;
            j++;
            x = arr[i];
        }
        i++;
    }
    return answer;
}
solution([1, 1, 3]);



function solution(arr) {
    var answer = [];
    var count = arr.length;

    for (var i = 0; i < count; i++) {
        var before = arr[i - 1];

        if (before != arr[i]) {
            answer.push(arr[i])
        }
    }

    return answer;
}

function solution(arr) {
    var answer = [];

    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] != arr[i + 1]) answer.push(arr[i]);
    }

    return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]))
