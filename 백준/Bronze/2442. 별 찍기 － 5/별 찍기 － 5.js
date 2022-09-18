let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
let output = ''
for (let i = 1; i <= input; i++) {
    output += " ".repeat(input - i) + '*'.repeat(i * 2 - 1) + '\n'
}
console.log(output)