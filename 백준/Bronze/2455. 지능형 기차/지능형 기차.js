let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split("\n")

let cnt = 0
let max_cnt = 0
for (let i = 0; i < 4; i++) {
    let [a, b] = input[i].split(' ')
    cnt -= Number(a)
    cnt += Number(b)
    max_cnt = Math.max(max_cnt, cnt)
}

console.log(max_cnt)