const isBrackets = (arr) => {
    const stack = []
    for (let char of arr) {
        if (stack.length) {
            if (stack.at(-1) === '[' && char === ']') {
                stack.pop()
                continue
            }
            if (stack.at(-1) === '{' && char === '}') {
                stack.pop()
                continue
            }
            if (stack.at(-1) === '(' && char === ')') {
                stack.pop()
                continue
            }
        } else {
            if (char === ']' || char === '}' || char === ')') return false
        }
        stack.push(char)
    }
    return stack.length ? false : true
}

function solution(s) {
    let ans = 0
    const arr = s.split('')
    
    arr.forEach(() => {
        if (isBrackets(arr)) ans++
        arr.push(arr.shift())
    })
    return ans
}