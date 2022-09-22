let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number)
const new_arr = [0, arr[0]]
const ans = [];

for (let i = 1; i < n; i++) {
    new_arr.push(new_arr.at(-1) + arr[i])
}
for (let i of input) {
    const [s, e] = i.split(' ').map(Number)
    ans.push(new_arr[e]-new_arr[s-1])
}

console.log(ans.join('\n'))