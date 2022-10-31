function solution(my_string, n) {
    let ans = '';
    for (let v of my_string) {
        ans += v.repeat(n)
    }
    return ans
}