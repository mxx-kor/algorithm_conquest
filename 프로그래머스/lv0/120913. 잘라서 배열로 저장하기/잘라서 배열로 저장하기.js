function solution(my_str, n) {
    const answer = [];
    my_str = my_str.split('')
    while(my_str.length) {
        answer.push(my_str.splice(0, n).join(""))
    }
    return answer;
}