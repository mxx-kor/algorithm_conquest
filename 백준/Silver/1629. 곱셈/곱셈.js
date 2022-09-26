let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const [a, b, c] = input.split(" ").map(BigInt)
const multiply = (a, b, c) => {
    if (b == 0) {
        return BigInt(1);
    }
    const tmp = multiply(a, BigInt(parseInt(b / BigInt(2))), c);
    if (b % BigInt(2)) {
        return (((tmp * tmp) % c) * a) % c;
    } else {
        return (tmp * tmp) % c;
    }
}

console.log(parseInt(multiply(a, b, c)))