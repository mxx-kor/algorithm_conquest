let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const ans = [];
for (let i = 1; i <= 30; i++) {
   if (!input.includes(i)) ans.push(i);
   if (ans.length === 2) break;
}

console.log(ans.join('\n'))