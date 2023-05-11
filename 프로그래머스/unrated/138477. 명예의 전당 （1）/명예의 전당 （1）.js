function solution(k, score) {
    let topK = []
    let lowScore = []
    score.map((s) => {
        if (topK.length < k) {
            topK.push(s)
        } else {
            if (lowScore.at(-1) < s) {
                topK.shift()
                topK.push(s)
            }
        }
        
        topK.sort((a, b) => a - b)
        lowScore.push(topK[0])
    })
    
    return lowScore
}