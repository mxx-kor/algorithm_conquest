function solution(weights) {
    let answer = 0;
    const hash = new Map();
    const ratio = [1, 2/3, 2/4, 3/4]
    
    weights.sort((a, b) => a - b)
    
    for (const w of weights) {
        for (const r of ratio) {
            if (hash.has(w * r)) answer += hash.get(w * r)
        }
        hash.set(w, (hash.get(w) || 0) + 1)
    }

    return answer;
}