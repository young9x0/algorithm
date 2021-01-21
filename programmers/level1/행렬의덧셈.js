function solution(arr1, arr2) {

    return arr1.map((arr, i) => arr.map((v, j) => v + arr2[i][j]));

}
function solution(A, B) {
    var answer = Array();
    for (var i = 0; i < A.length; i++) {
        answer[i] = [];

        for (var j = 0; j < A[i].length; j++) {
            answer[i][j] = A[i][j] + B[i][j];
        }
    }
    return answer;
}

function solution(arr1, arr2) {

    let arr = [[], []], a = [[], []];

    for (let i = 0; i <= arr1.length - 1; i++) {
        for (let j = 0; j <= arr1.length - 1; j++) {

            arr[i].push(arr1[i][j] + arr2[i][j]);
        }
        arr[i].filter((v) => {
            if (!isNaN(v)) return a[i].push(v);

        });

    }

    return a;

}
console.log(solution([[1], [2]], [[3], [4]]));