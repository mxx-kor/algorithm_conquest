function solution(dots) {
    const sortedDots = dots.sort((a, b) => a[0] - b[0]);
    return Math.abs(sortedDots[0][1] - sortedDots[1][1]) * Math.abs(sortedDots[0][0] - sortedDots[2][0]);
}