function solution(sides) {
    let ans = []
    sides.sort((a, b) => a - b)
    //큰 값이 가장 긴 변
    for (let i = 1; i <= sides[1]; i++) {
        if (sides[0] + i > sides[1]) {
            ans.push(i)
        } 
    }
    //나머지 한 변이 가장 긴 변
    for (let j = sides[1] + 1; j <= sides[0] + sides[1]; j++) {
        if (j < sides[0] + sides[1]) {
            ans.push(j)
        }
    }
    return ans.length
}