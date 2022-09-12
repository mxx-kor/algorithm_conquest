let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const n = Number(input)
for (let i = n; i > 0; i--) {
    console.log("*".repeat(i))
}