let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let [n, ...arr] = input
arr = arr[0].split(" ")
let setWord = new Set();

for (let i = 0; i < n; i++) {
    setWord.add(arr[i][0]);
}

console.log(setWord.size === 1 ? 1 : 0)