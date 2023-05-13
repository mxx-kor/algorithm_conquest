function solution(n, words) {
    let lastWord = words[0]
    let answer = []
    const dict = new Map()
    dict.set(words[0], '1')
    for (let i = 1; i < words.length; i++) {
        if (dict.has(words[i]) || lastWord.at(-1) !== words[i][0]) {
            answer.push(parseInt(i % n) + 1)
            answer.push(parseInt(i / n) + 1)
            break
        } else {
            lastWord = words[i]
            dict.set(words[i], '1')
        }
    }

    return answer.length ? answer : [0, 0];
}
