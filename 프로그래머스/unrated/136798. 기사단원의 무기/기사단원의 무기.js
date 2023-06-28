function solution(number, limit, power) {
    let ans = 0
    for (let i = 1; i <= number; i++) {
        let cnt = 0
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                if (i / j === j) {
                    cnt++
                } else {
                    cnt += 2
                }
            }
            if (cnt > limit) {
                cnt = power
                break
            }
        }
        ans += cnt
    }
    
    return ans
}