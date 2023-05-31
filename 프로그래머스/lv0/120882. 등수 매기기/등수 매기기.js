function solution(score) {
    const avg = score.map(([score1, score2]) => (score1 + score2) / 2)
    const sorted = [...avg].sort((a, b)=> b - a)
    return avg.map(score => sorted.indexOf(score) + 1)
}