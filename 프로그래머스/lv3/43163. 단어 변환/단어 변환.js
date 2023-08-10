function solution(begin, target, words) {
    const queue = [[begin, 0]]
    const visited = []
    if (!words.includes(target)) return 0
    while(queue.length) {
        let [currWord, cnt] = queue.shift()
        if (currWord === target) return cnt
        words.forEach((word) => {
            let isMatch = 0 
            if (visited.includes(word)) return
            
            for (let i = 0; i < word.length; i++) {
                if (word[i] === currWord[i]) isMatch++
            }
            if (isMatch === word.length - 1) {
                queue.push([word, ++cnt])
                visited.push(word)
            }
        })
    }
}