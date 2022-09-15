let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let n  = Number(input.shift());
let ans = [];
for (let t = 0; t < n; t++) {
    const map_size = Number(input.shift());
    const [sx, sy] = input.shift().split(' ').map(Number);
    const [ex, ey] = input.shift().split(' ').map(Number);
    const visited = Array.from(Array(map_size), () => Array(map_size).fill(false));
    let queue = [[sx, sy, 0]];
    visited[sx][sy] = true
    const [dx, dy] = [[2, 2, -2, -2, 1, -1, 1, -1], [1, -1, 1, -1, 2, 2, -2, -2]];
    while (queue.length) {
        const [x, y, depth] = queue.shift();
        if (x === ex && y === ey) {
            ans.push(depth);
            break;
        }
        for (let i = 0; i < 8; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]]
            if (nx < 0 || ny < 0 || nx >= map_size || ny >= map_size) continue;
            if (!visited[nx][ny]) {
                visited[nx][ny] = true
                queue.push([nx, ny, depth + 1])
            } 
        }
    }
}

console.log(ans.join('\n'))
