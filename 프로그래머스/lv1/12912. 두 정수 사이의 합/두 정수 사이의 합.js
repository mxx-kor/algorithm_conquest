function solution(a, b) {
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    ans = 0
    if (a == b) {
        return a
    }else {
        for (let i = min; i < max+1; i++) {
            ans += i
        }
        return ans
    }
}