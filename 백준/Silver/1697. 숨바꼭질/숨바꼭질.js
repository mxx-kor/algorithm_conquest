let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let [n, k] = input.split(' ').map(Number)
let visited = Array(100001).fill(false);
let queue = [[n, 0]]

while (queue.length) {
    const [now, t] = queue.shift();
    if (visited[now]) continue;
    visited[now] = true
    if (now === k) {
        console.log(t);
        break;
    };
    if (now * 2 <= 100000) {
        queue.push([now * 2, t + 1])
    }
    if (now + 1 <= 100000) {
        queue.push([now + 1, t + 1])
    }
    if (now - 1 >= 0) {
        queue.push([now - 1, t + 1])
    }
}