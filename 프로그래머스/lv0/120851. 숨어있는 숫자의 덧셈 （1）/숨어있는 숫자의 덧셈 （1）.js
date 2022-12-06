function solution(my_string) {
    let ans = 0
    for (let i of my_string) {
        if (parseInt(i)) {
            ans += Number(i)
        }
    }
    return ans
}