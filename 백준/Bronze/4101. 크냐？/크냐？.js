let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const ans = [];
for (let i of input) {
    const [a, b] = i.split(" ").map(Number)
    if (a === 0 && b === 0) {
        break
    }
    if (a > b) {
        ans.push("Yes");
    }else {
        ans.push("No");
    }
}

console.log(ans.join('\n'))