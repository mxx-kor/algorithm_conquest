function solution(rsp) {
    let ans = ''
    for (let i of rsp) {
        if (i === "2") {
            ans += "0"
        } else if (i === "0") {
            ans += "5"
        } else {
            ans += "2"
        }
    }
    return ans
}