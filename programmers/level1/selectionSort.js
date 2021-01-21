
let selectionSort = function (array) {
    let answer = '';
    let length = array.length;
    let minIndex, temp, i, j;

    for (i = 0; i < length - 1; i++) {
        minIndex = i;

        for (j = i + 1; j < length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
    }
    answer = array.filter((v, i) => {
        console.log('v', v);
        console.log('i', array[i + 1]);
        return v !== array[i + 1]
    });
    console.log(answer);
    // return answer;
};
selectionSort([5, 5, 2, 3, 4, 1]);

