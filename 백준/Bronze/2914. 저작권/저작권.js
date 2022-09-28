let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
const [a , i] = input.map(Number)
console.log(a * (i-1) + 1)