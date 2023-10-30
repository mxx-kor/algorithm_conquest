function solution(n, t, m, p) {
    let ans = ""
    let str = ""
    
    for (let i = 0; i < t * m; i++) {
        str += i.toString(n).toUpperCase()
    }
    
    for (let j = p - 1; j < t * m; j += m) {
        ans += str[j]
    }
    
    return ans
}