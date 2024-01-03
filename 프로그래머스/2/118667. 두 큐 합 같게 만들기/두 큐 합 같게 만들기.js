function solution(queue1, queue2) {
    let q1Sum = queue1.reduce((acc, curr) => acc + curr, 0)
    let q2Sum = queue2.reduce((acc, curr) => acc + curr, 0)
    const half = (q1Sum + q2Sum) / 2
    const arr = [...queue1, ...queue2]
    let start = 0
    let end = queue1.length
    
    for (let cnt = 0; cnt < queue1.length * 3; cnt++) {
        if (q1Sum === half) {
            return cnt
        }
        if (q1Sum < half) {
            q1Sum = q1Sum + arr[end % arr.length]
            end++
        } else {
            q1Sum = q1Sum - arr[start % arr.length]
            start++
        }
    }
    
    return -1
}