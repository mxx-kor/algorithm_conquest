let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split(" ")
let total = input.map((el) => el**2).reduce((ac, c) => ac + c)

console.log(total % 10)