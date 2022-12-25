function solution(n) {
    const ans = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            ans.push(i)
        }
    }
    return ans
}