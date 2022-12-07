function solution(n) {
    const ans = []
    let divisor = 2
    while (n >= 2) {
        if (n % divisor === 0) {
            ans.push(divisor)
            n /= divisor
        }
        else divisor++
    }
    return [...new Set(ans)]
}