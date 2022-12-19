function solution(order) {
    const clap = ["3", "6", "9"]
    let ans = 0
    for (let i of String(order)) {
        if (clap.includes(i)) ans++
    }
    return ans
}