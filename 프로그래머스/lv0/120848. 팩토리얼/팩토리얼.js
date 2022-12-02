function solution(n) {
    let i = 1
    let result = 1
    while (result <= n) {
        i += 1
        result = result * i
        if (result === n) return i
    }
    return i - 1
}