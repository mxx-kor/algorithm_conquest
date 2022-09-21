let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number)
const new_arr = [arr[0]]
const m = Number(input.shift());
const ans = [];

for (let i = 1; i < n; i++) {
    new_arr.push(new_arr.at(-1) + arr[i])
}
for (let i of input) {
    const [s, e] = i.split(' ').map(Number)
    if (s === 1) {
        ans.push(new_arr[e - 1])
    }else {
        ans.push(new_arr[e-1]-new_arr[s-2])
    }
}

console.log(ans.join('\n'))