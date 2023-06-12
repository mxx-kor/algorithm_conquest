function solution(A, B) {
    if (A === B) return 0
    const wordArr = [...A]
    for (let i = 0; i < A.length; i++) {
        wordArr.unshift(wordArr.pop())
        if (wordArr.join('') === B) return i + 1
    }

    return -1;
}