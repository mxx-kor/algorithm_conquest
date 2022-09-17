let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let ans = ''
for (let i of input) {
    if(i === i.toUpperCase()) ans += i.toLowerCase();
    else ans += i.toUpperCase();
}

console.log(ans)