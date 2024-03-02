function solution(n, stations, w) {
    let ans = 0
    const coverage = (w * 2) + 1
    
    let prev = 0
    stations.forEach((station) => {
        const notCovered = station - w - 1 - prev
        if (notCovered > 0) {
            ans += Math.floor((notCovered - 1) / coverage) + 1
        }
        prev = station + w
    })
    
    const endPoint = n - prev
    if (endPoint > 0) {
        ans += Math.floor((endPoint - 1) / coverage) + 1
    }

    return ans
}