let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [l, p] = input.shift().split(" ").map(Number)
let arr = input[0].split(" ").map(Number)

const people = l * p
let ans = []
for (let i of arr) {
    ans.push(i - people)
}
console.log(ans.join(" "))