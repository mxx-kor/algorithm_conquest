function solution(sequence) {
    const plus = []
    const minus = []
    let ans = 0
    
    sequence.forEach((s, i) => {
        if (i === 0) {
            plus.push(s)
            minus.push(-s)
        } else if (i % 2 === 0) {
            plus.push(Math.max(s, plus.at(-1) + s))
            minus.push(Math.max(-s, minus.at(-1) - s))
        } else {
            plus.push(Math.max(-s, plus.at(-1) - s))
            minus.push(Math.max(s, minus.at(-1) + s))
        }
        
        ans = Math.max(ans, plus.at(-1), minus.at(-1))
    })
    
    return ans
}