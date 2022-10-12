let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const vowels = ['a', 'e', 'i', 'o', 'u'];
let ans = 0
for (let i of input) {
    if (vowels.includes(i)) ans++;
}

console.log(ans)