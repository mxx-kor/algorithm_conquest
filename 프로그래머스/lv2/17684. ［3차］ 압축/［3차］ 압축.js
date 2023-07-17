function solution(msg) {
    const dict = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65))
    const answer = [];
    let w = msg[0]
    
    for (let i = 1; i < msg.length; i++) {
        if (dict.includes(w + msg[i])) {
            w = w + msg[i]
        } else {
            dict.push(w + msg[i])
            answer.push(dict.indexOf(w) + 1)
            w = msg[i]
        }
    }
    
    answer.push(dict.indexOf(w) + 1)
    
    return answer;
}