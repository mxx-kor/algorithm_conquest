function solution(a, b, n) {
    let total = 0

    while(n >= a) {
        total += parseInt(n / a) * b
        n = parseInt(n / a) * b + n % a
    }
    
    return total
}