let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let arr1 = input.shift().split('')
let arr2 = input.shift().split('')
let a = Array(26).fill(0)
let b = Array(26).fill(0)
let ans = 0

arr1.map((el) => {
    a[el.charCodeAt()-97] += 1
})
arr2.map((el) => {
    b[el.charCodeAt()-97] += 1
})

for (let i = 0; i < 26; i++) {
    ans += Math.abs(a[i] - b[i])
}

console.log(ans)