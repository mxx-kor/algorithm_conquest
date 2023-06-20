function solution(num, total) {
    const firstNum = Math.ceil(total / num - parseInt(num / 2))
    return Array.from(Array(num), (_, i) => i + firstNum);
}