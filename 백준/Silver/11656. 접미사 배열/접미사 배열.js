let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let ans = []
for (let i = 0; i < input.length; i++) {
    ans.push(input.slice(i));
}
ans.sort()
console.log(ans.join("\n"))