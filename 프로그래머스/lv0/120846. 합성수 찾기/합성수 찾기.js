function solution(n) {
    let cnt = 0
    for (let i = 1; i <= n; i++) {
        let tmp = 0
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) tmp += 1
            if (tmp === 3) {
                cnt += 1
                break
            }
        }
        console.log(tmp)
    }
    return cnt
}