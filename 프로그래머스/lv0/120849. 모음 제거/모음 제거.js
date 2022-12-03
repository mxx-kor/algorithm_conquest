function solution(my_string) {
    const arr = ["a", "e", "i", "o", "u"]
    let answer = ''
    for (let letter of my_string) {
        if (!arr.includes(letter)) {
            answer += letter
        }
    }
    return answer;
}