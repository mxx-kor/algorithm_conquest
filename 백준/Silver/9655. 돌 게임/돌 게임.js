let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
console.log(input % 2 === 0 ? 'CY' : 'SK') 