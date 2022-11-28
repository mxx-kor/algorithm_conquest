function solution(box, n) {
    return box.map(el => parseInt(el / n)).reduce((acc, cur) => acc * cur, 1)
}