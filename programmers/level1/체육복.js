function solution(n, lost, reserve) {
    let answer = n;
    let student = Array(n).fill(1);
    for (let i = 0; i < student.length; i++) {
        if (lost.includes(i + 1)) {
            student[i] -= 1;
        }
        if (reserve.includes(i + 1)) {
            student[i] += 1;
        }
    }
    for (let i in student) {
        //i=0~4
        if (student[i] == 2 && student[i - 1] == 0) {
            student[i] -= 1;
            student[i - 1] += 1;
        }
        if (student[i] == 0 && student[i - 1] == 2) {
            student[i] += 1;
            student[i - 1] -= 1;
        }
    }
    for (let s of student) { // s=[1,1,1,1,2]
        if (s == 0) answer--;
    }
    return answer;


};


function solution(n, lost, reserve) {
    console.log(lost.filter(a => {
        const b = reserve.find(r => {

            return Math.abs(r - a) <= 1
        })
        console.log(b);
        if (!b) return true

        reserve = reserve.filter(r => r !== b)
    }).length)
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r - a) <= 1)
        if (!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}
function solution(n, lost, reserve) {
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r - a) <= 1)
        if (!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}


function solution(x, lost, reserve) {
    const students = Array(x).fill(1);
    for (let i of lost) {
        students[i - 1] -= 1;
    }
    for (let i of reserve) {
        students[i - 1] += 1;
    }
    for (let i in students) {
        if (students[i] === 2 && students[i + 1] === 0) {
            students[i] -= 1;
            students[i + 1] += 1;
        }
        if (students[i - 1] === 0 && students[i] === 2) {
            students[i] -= 1;
            students[i - 1] += 1;
        }

    }
    let answer = 0;
    for (let s of students) {
        if (s > 0) {
            answer += 1;

        };

    }

    return answer;
}




console.log(solution(3, [3], [1]));