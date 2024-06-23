function solution(n, m) {


    const greatestCommonDivisor = (a, b) => {
        if (b === 0) return a;
        return greatestCommonDivisor(b, a % b);
    }
    const leastCommonMultiple = (a, b) => (a * b) / greatestCommonDivisor(a, b);
    return [greatestCommonDivisor(n, m), leastCommonMultiple(n, m)];

}

function solution(a, b) {
    let r, ab;

    for (ab = a * b; r = a % b; a = b, b = r) {

    }
    console.log(ab, a, b);
    console.log(r);
    return [b, ab / b];
}

console.log(solution(2, 5));
