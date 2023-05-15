function solution(dots) {
    const case1 = (dots[1][1] - dots[0][1]) / (dots[1][0] - dots[0][0]) === (dots[3][1] - dots[2][1]) / (dots[3][0] - dots[2][0])
    const case2 = (dots[2][1] - dots[0][1]) / (dots[2][0] - dots[0][0]) === (dots[3][1] - dots[1][1]) / (dots[3][0] - dots[1][0])
    const case3 = (dots[3][1] - dots[0][1]) / (dots[3][0] - dots[0][0]) === (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0])
    return case1 || case2 || case3 ? 1 : 0
}

//1 2, 3 4
//1 3, 2 4
//1 4, 2 3