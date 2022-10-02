let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, c] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
const hash = new Map();
const newArr = [];
let ans = '';

for (let i of arr) {
    hash.set(i, (hash.get(i) || 0) + 1);
}

for (const [k, v] of hash.entries()) {
    newArr.push([k, v])
}

newArr.sort((a, b) => b[1] - a[1])

for (let i = 0; i < newArr.length; i++){
    ans += Array(newArr[i][1]).fill(newArr[i][0]).join(" ") + " "
}

console.log(ans)