function solution(num_list) {
    const answer = [];
    answer.push(num_list.filter(el => el % 2 === 0).length)
    answer.push(num_list.filter(el => el % 2 !== 0).length)
    return answer;
}