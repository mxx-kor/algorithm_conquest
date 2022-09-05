let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const [a, b] = input.split(' ').map(Number);
let arr = [0];
for (let i = 1; i < 46; i++) {
    for (let j = 0; j < i; j++) {
        arr.push(i)
    }
}

console.log(arr.slice(a, b+1).reduce((sum, c) => sum + c, 0))