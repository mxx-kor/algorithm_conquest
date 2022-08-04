function solution(array, commands) {
    var answer = [];
    for (let i of commands) {
        let trimmed = array.slice(i[0]-1, i[1]).sort((a,b) => a - b)
        answer.push(trimmed[i[2]-1])
    }
    return answer;
}