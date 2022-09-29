let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const [d, h, w] = input

const r = d / ((h ** 2 + w ** 2) ** 0.5)
console.log(parseInt(h * r), parseInt(w * r))