function solution(k, d) {
    let ans = 0
    for (let i = 0; i <= d; i+=k){
        const p = parseInt(Math.sqrt(d**2 - i**2))
        ans += parseInt(p/k) + 1
    }
    return ans
}