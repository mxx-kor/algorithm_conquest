function solution(array) {
    let cnt = 0;
    for (let num of array) {
        for (let n of num.toString()) {
            if (n === "7") cnt++
        }
    }
    return cnt;
}