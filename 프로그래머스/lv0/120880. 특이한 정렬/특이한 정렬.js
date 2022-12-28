function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const [aGap, bGap] = [Math.abs(a - n), Math.abs(b - n)]
        if (aGap === bGap) return b - a
        return aGap - bGap
    })
}