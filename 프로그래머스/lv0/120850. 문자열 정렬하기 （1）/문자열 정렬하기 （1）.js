function solution(my_string) {
    const answer = [];
    for (let i of my_string) {
        if (Number(i) || Number(i) === 0) {
            answer.push(Number(i))
        }
    }
    return answer.sort((a, b) => a - b)
}