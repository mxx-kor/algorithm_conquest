let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(BigInt);
const [n, ...arr] = input
const hash = new Map()
const result = arr.reduce((max, cur) => {
    const now = (hash.get(cur) || 0) + 1;
    const max_card = (hash.get(max) || 0);
    hash.set(cur, now)

    if (now > max_card) {
        max = cur
    } else if (now === max_card) {
        cur < max ? max = cur : max;
    }
    return max;
}, 0n);

console.log(result.toString())