let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
let [A, B, C, D] = input

console.log(Number(A+B) + Number(C+D))