let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
input.shift();
input.sort((a, b) => b - a)
console.log(input.join("\n"))