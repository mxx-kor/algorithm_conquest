function solution(n) {
    let ans = 0
    for(let i = 2; i <= n; i += 2) {
        ans += i
    }
    return ans
}