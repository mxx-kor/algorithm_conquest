function solution(n) {
    let answer = 0;
    for (let i = 1; i < n + 1; i++) {
        total = 0
        for (let j = i; j < n + 1; j++) {
            total += j
            if (total == n) {
                answer ++
                break
            }else if(total > n) {
                break
            }
        }
    }
    return answer;
}