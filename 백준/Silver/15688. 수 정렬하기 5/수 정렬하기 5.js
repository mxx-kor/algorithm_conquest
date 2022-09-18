let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let n = Number(input.shift())
let arr = [];
for (let i = 0; i < input.length; i++) {
    arr.push(Number(input[i]))
}

console.log(arr.sort((a, b) => a - b).join('\n'))