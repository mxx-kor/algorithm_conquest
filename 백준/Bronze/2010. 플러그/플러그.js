let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const n = Number(input.shift());
const sum = input.reduce((acc, curr) => acc + Number(curr), 0)
console.log(sum - (n - 1))