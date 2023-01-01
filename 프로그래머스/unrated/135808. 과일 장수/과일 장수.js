function solution(k, m, score) {
    const sorted_score = score.sort((a,b) => b-a)
    let ans = 0
    let idx = m - 1
    
    for (let i = 0; i < Math.floor(sorted_score.length / m); i++) {
        ans += sorted_score[idx] * m
        idx += m;
    }
    
    return ans
}