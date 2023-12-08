function solution(N, number) {
    const dp = Array.from({length: 9}, () => new Set())
    if (N === number) return 1
    dp.forEach((el, idx) => {
        if (idx !== 0) el.add(Number(String(N).repeat(idx)))
    })
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j < i; j++) {
            for (const item1 of dp[j]) {
                for (const item2 of dp[i - j]) {
                    dp[i].add(item1 + item2)
                    dp[i].add(item1 - item2)
                    dp[i].add(item1 / item2)
                    dp[i].add(item1 * item2)
                }
            }
        }
        if (dp[i].has(number)) return i
    }
    return -1;
}
