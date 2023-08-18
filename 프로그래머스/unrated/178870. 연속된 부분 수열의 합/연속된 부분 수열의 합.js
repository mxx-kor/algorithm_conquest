function solution(sequence, k) {
    let answer = [0, sequence.length - 1];
    let p1 = 0
    let p2 = 0
    let sum = sequence[0]
    
    while (p1 < sequence.length && p2 < sequence.length) {
        if (sum === k) {
            if (p2 - p1 < answer[1] - answer[0]) {
                answer = [p1, p2]
            } 
            
            sum -= sequence[p1]
            p1 += 1
            p2 += 1
            sum += sequence[p2]
        } else if (sum > k) {
            sum -= sequence[p1]
            p1 += 1
        } else if (sum < k) {
            p2 += 1
            sum += sequence[p2]
        }
    }
    return answer;
}