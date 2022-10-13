let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const t = +input.shift();
const ans = []
for (let i = 0; i < t; i ++) {
    const n = +input.shift();
    const arr = input.shift().split(' ').map(Number);
    let [max, value] = [0, 0]; 
    for (let j = n - 1; j >= 0; j--) {
        if (max < arr[j]) max = arr[j];
        else  value += max - arr[j];
    }
    ans.push(value);
}

console.log(ans.join('\n'))
