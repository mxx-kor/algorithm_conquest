function solution(babbling) {
    const wordsCanSpeak = ["aya", "ye", "woo", "ma"]
    let ans = 0
    const check = babbling.map((word) => {
        wordsCanSpeak.map((wordCanSpeak) => {
            word = word.replaceAll(wordCanSpeak, 'X')
        })
        word = word.replaceAll('X', '')
        if (word === '') ans++
    })
    return ans;
}