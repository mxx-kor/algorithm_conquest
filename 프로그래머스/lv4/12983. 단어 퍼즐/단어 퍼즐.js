function solution(strs, t) {
    const dp = Array(t.length + 1).fill(0)
    const strsSet = new Set(strs);
    for (let i = 1; i < t.length + 1; i++) {
        dp[i] = Infinity
        for (let j = 1; j < Math.min(i+1, 6); j++) {
            const start = i - j
            const end = i
            if (strsSet.has(t.slice(start, end))) {
                dp[i] = Math.min(dp[i], dp[i - j] + 1)
            }
        }
    }
    
    return dp.at(-1) === Infinity ? -1 : dp.at(-1)
}