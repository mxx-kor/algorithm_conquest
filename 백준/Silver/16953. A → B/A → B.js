let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
const [a, b] = input.map(Number)
let queue = [[a, 1]]
let ans = 0

while (queue.length) {
    const [now, t] = queue.shift();
    if (now === b) {
        ans = t
        break;
    };
    if (now * 2 <= b) {
        queue.push([now * 2, t + 1])
    }
    if (Number(String(now) + '1') <= b) {
        queue.push([Number(String(now) + '1'), t + 1])
    }
}

console.log(ans ? ans : -1)