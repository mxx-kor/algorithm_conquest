function solution(s1, s2) {
    let ans = 0
    for (let i of s1) {
        if (s2.includes(i)) {
            ans++
        }
    }
    return ans
}