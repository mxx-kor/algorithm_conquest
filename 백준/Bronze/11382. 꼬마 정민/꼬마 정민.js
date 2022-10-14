let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
console.log(input.reduce((acc, curr) => acc + curr, 0))
