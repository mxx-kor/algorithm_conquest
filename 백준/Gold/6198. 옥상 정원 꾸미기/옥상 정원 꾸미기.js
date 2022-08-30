let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split("\n")
const n = Number(input[0])
let stack = []
let ans = 0

for (let i = 1; i < n + 1; i++) {
    while (stack && stack.at(-1) <= Number(input[i])) {
        stack.pop()
    }
    stack.push(Number(input[i]))
    ans += stack.length-1
}

console.log(ans)