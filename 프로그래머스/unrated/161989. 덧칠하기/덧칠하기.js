function solution(n, m, section) {
    let ans = 0
    let wall = 0
    section.map((s) => {
        if (s > wall) {
            wall = s + m - 1
            ans++
        }
    })
    return ans
}