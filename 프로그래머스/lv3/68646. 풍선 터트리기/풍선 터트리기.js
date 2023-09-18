function solution(a) {
    const left = []
    const right = []
    let left_min = a[0]
    let right_min = a.at(-1)
    
    for (let i = 1; i < a.length - 1; i++) {
        if (left_min > a[i]) {
            left_min = a[i]
            left.push(a[i])
        }
        if (right_min > a.at(-i - 1)) {
            right_min = a.at(-i - 1)
            right.push(a.at(-i - 1))
        }
    }
    
    return [...new Set([...left, ...right])].length + 2;
}