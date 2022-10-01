let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, q] = input.shift().split(" ").map(Number)
let arr = []
let ans = []
for (let i = 0; i < n; i++) {
    let music = Number(input.shift())
    for (let j = 0; j < music; j++) {
        arr.push(i+1)
    }
}

for (let i = 0; i < q; i++) {
    let t = Number(input.shift())
    ans.push(arr[t])
}

console.log(ans.join('\n'))