let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split("\n")
let n = Number(input[0])
let ans = ''

for (let i = 0; i < input[1].length; i++) {
    let cnt = 1
    for (let j = 2; j < n + 1; j++) {
        if (input[j][i] == input[1][i]) {
            cnt += 1
        }
    }
    if (cnt == n) {
        ans += input[1][i]
    } else {
        ans += '?'
    }
}

console.log(ans)