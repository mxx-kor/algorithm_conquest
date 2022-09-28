let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
const [n, r, c] = input.map(Number)

const sol = (n, r, c) => {
    if (n === 0) return 0;
    return (2 * (r % 2) + (c % 2)) + (4 * sol(n-1, parseInt(r/2), parseInt(c/2)));
}

console.log(sol(n, r, c))