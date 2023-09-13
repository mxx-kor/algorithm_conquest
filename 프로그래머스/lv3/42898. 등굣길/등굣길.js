function solution(m, n, puddles) {
    const dp = Array.from({length: n}, () => Array(m).fill(0))
    dp[0][0] = 1
    puddles.forEach(([x, y]) => {
        dp[y - 1][x - 1] = -1
    })
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dp[i][j] !== -1) {
                const value = 
                      (dp[i][j] + (j > 0 && dp[i][j-1] !== -1 ? dp[i][j-1] : 0) +
                      (i > 0 && dp[i-1][j] !== -1 ? dp[i-1][j] : 0)) % 1000000007
                dp[i][j] = value
            }
        }
    }
    
    return dp[n - 1][m - 1] % 1000000007
}