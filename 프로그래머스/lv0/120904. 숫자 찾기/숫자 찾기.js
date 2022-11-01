function solution(num, k) {
    let ans = 0
    num = String(num).split('')
    for (let i = 0; i < num.length; i++) {
        if (num[i] === String(k)) {
            ans = i + 1
            break
        }
    }
    return ans === 0 ? -1 : ans
}