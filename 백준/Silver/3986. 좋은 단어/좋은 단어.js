let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input.shift());
let cnt = 0;

for (let e of input) {
    let stack = [];
    for (let i = 0; i < e.length; i++) {
        if (stack.at(-1) === e[i]) stack.pop();
        else stack.push(e[i])
    };
    if (stack.length == 0) cnt += 1
}

console.log(cnt)