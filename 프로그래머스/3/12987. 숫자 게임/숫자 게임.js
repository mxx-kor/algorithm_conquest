function solution(A, B) {
    let ans = 0
    const sortedA = [...A].sort((a, b) => b - a)
    const sortedB = [...B].sort((a, b) => a - b)
    sortedA.forEach((a) => {
        if (sortedB.at(-1) > a) {
            ans++
            sortedB.pop()
        }
    })
    return ans;
}