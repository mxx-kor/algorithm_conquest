let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split("\n")

const [n, m] = input[0].split(' ').map(Number);
const order = input[1].split(' ').map(Number);
let queue = Array.from(Array(n), (v, i) => i + 1);
let cnt = 0;

for (let i of order) {
    while (true) {
        if (queue.indexOf(i) === 0) {
            queue.shift();
            break;
        }

        if (queue.indexOf(i) < queue.length - queue.indexOf(i)) {
            queue.push(queue.shift());
            cnt += 1;
        } else {
            queue.unshift(queue.pop());
            cnt += 1;
        }
    }
}

console.log(cnt)