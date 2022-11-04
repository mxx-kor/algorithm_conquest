function solution(emergency) {
    //크기를 순서대로 정리한거
    let arr = emergency.slice().sort((a, b) => b - a)
    let ans = emergency.map((el) => arr.indexOf(el) + 1)
    return ans
}