let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let total = Number(input.shift())
for (let i of input) {
    total -= i
}

console.log(total)