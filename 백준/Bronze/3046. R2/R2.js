let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let [r1, s] = input.split(' ').map(Number)
console.log(2 * s - r1)