let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split('\n')
console.log(input[1].split(" ").reduce((cnt, el) => cnt + (`${input[2]}` === el), 0))