function solution(cipher, code) {
    let answer = '';
    let i = 1
    while (code * i <= cipher.length) {
        answer += cipher[(code * i) - 1]
        i += 1
    }
    return answer;
}