function solution(arr, divisor) {
    let answer = []
    for (let i of arr) {
        if (i % divisor === 0) {
            answer.push(i)
        }
    }
    return answer.length === 0 ? [-1]:answer.sort((a, b) => a - b);
}