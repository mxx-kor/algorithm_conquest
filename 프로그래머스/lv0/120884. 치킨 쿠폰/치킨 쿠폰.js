function solution(chicken) {
    let ans = 0
    while (chicken >= 10) {
        ans += parseInt(chicken / 10)
        chicken = (chicken % 10) + parseInt(chicken / 10)
    }
    
    return ans
}