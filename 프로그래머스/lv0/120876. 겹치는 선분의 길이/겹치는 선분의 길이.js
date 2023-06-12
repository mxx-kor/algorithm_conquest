function solution(lines) {
    const arr = Array(200).fill(0)
    
    lines.map(([start, end]) => {
        for (let i = start; i < end; i++) {
            arr[i + 100] += 1
        }
    })
    
    return arr.filter((el) => el > 1).length
}
