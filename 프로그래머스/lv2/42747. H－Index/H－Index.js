function solution(citations) {
    citations = citations.sort((a, b) => b - a);
    
    for (let [i, e] of citations.entries()) {
        if (i >= e) {
            return i
        }
    }
    return citations.length
}