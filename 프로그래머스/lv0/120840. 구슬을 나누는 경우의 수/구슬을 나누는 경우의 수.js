function solution(balls, share) {
    const factorial = (n) => {
        let result = BigInt(1)
        for (let i = n; i > 0; i--) {
            result *= BigInt(i)
        }
        return result
    }
    return factorial(balls) / (factorial(balls - share) * factorial(share))
}