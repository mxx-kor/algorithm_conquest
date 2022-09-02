let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const [n, m] = input.split(" ")
console.log(Math.abs(n - m))