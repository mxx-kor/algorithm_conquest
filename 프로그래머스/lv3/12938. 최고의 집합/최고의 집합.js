function solution(n, s) {
    const answer = [];
    if (parseInt(s / n) === 0) {
        return [-1]
    }
    while (n > 0) {
        if (n === 1) {
            answer.push(s)        
        } else {
            const middle = parseInt(s / n)
            answer.push(middle)
            s -= middle
        }
        n--
    }
    return answer;
}