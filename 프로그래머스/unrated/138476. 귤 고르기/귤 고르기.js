function solution(k, tangerine) {
    let ans = 0
    const hash = new Map()
    tangerine.forEach((t) => {
        hash[t] = hash[t] ? hash[t] + 1 : 1
    })
    const hashEntries = Object.entries(hash).sort(([key1, value1], [key2, value2]) => value2 - value1)
    for (let [key, value] of hashEntries) {
        if (k <= 0) break
        ans++
        k -= value
    }
    return ans
}