let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let [n, m] = input.shift().split(' ').map(Number)
let arr = []
for (let i = 0; i < n; i++) {
    arr.push(input.shift().split(" ").map(Number))
}
let k = input.shift()
for (let a = 0; a < k; a++) {
    const [i, j, x, y] = input[a].split(" ").map(Number);
    let result = 0;

    for (let r = i-1; r < x; r++) {
        for (let c = j-1; c < y; c++) {
            result += arr[r][c]
        }
    }
    console.log(result)
}