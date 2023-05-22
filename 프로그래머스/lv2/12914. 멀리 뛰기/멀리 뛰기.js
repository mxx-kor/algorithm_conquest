function solution(n) {
    const answer = Array(n)
    answer[0] = 1
    answer[1] = 2
    for (let i = 2; i <= n; i++) {
        answer[i] = (answer[i - 2] + answer[i - 1]) % 1234567
    }
    return answer[n - 1] % 1234567;
}
