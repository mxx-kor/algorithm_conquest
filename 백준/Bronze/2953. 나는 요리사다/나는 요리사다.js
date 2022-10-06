let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const arr = []
const ans = []
input.forEach((v) => arr.push(v.split(" ").map(Number)))
arr.forEach((v, i) => {
   const sum = v.reduce((acc, curr) => {
      return acc + curr
   }, 0)
   ans.push([i+1, sum])
})
ans.sort((a, b) => b[1] - a[1])
console.log(ans[0].join(" "))