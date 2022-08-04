function solution(numbers) {
    let answer = 0
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    numbers = numbers.sort()
    for (let i of arr) {
        if (numbers.includes(i) == false) {
            answer += i
        }
    }
    return answer;
}