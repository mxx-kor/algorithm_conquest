let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString()
console.log(parseInt(input, 16))