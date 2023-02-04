function solution(n, t) {
    var answer = n * 2;
    for (let i = 0; i < t - 1; i++) {
        answer = answer * 2 
    }
    return answer;
}