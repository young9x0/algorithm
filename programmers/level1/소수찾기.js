function solution(s) {
    let a = [], b = [];

    for (let i = 0; i <= s; i++) {
        a.push(i);

        if (a[i] % 2 !== 0 && a[i] % 3 !== 0 && a[i] > 3) {

            b.push(a[i]);


        }
    }
    return b.length + 2;
}
function solution(n) {
    const primes = [];
    for (let j = 2; j <= n; j++) {
        let isPrime = true;
        const sqrt = Math.sqrt(j);
        console.log('sqrt', sqrt);
        for (let i = 0; primes[i] <= sqrt; i++) {
            console.log(i, primes[i], 'j', j);
            if (j % primes[i] === 0) {
                isPrime = false;
                break;
            }

        }
        if (isPrime) {
            primes.push(j);
        };

    }
    return primes.length;
}

function solution(n, start = 2, primes = [], count = 0) {
    if (start > n) return count;
    const sqrt = Math.sqrt(start);
    const isPrime = primes.every(v => start % v);
    if (isPrime) primes.push(start);
    return solution(n, start + 1, primes, count + (isPrime ? 1 : 0));
}

function solution(n) {
    let range = Array(n - 1).fill().map((v, i) => i + 2);
    for (let i = 0; i < range.length; i++) {
        range = range.filter(v => v === range[i] || v % range[i]);
    }
    return range.length;
}
const solution = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) arr.push(i);

    for (let i = 1; i * i < n; i++) {
        console.log(i, 'arr[i]', arr[i]);
        if (arr[i]) {
            let num = arr[i];
            console.log('num', num);
            for (let j = 2 * num; j <= n; j += num) {
                console.log('j', j);
                arr[j - 1] = 0;
            }
        }
    }
    let answer = arr.filter((number) => {
        console.log(number, 'number');
        return number;
    });
    console.log('answer', answer);
    answer.shift();
    console.log('shift', answer);
    return answer.length;
}
const solution = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) arr.push(i);

    for (let i = 1; i * i < n; i++) {
        console.log(i, 'arr[i]', arr[i]);
        if (arr[i]) {
            let num = arr[i];
            console.log('num', num);
            for (let j = num * num; j <= n; j += num) {
                console.log('j', j);
                arr[j - 1] = 0;
            }
        }
    }
    let answer = arr.filter((number) => {
        console.log(number, 'number');
        return number;
    });
    console.log('answer', answer);
    answer.shift();
    console.log('shift', answer);
    return answer.length;
}

console.log(solution(100));