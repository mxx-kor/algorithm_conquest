function solution(num_list, n) {
    let answer = [];
    let temp = num_list.length / n
    for (let i = 0; i < temp; i++) {
        answer.push(num_list.splice(0, n))
    }
    return answer;
}