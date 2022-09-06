let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [m, n, h] = input.shift().split(' ').map(Number);
let tomatoes = m * n * h, ans;
let queue = [];
let visited = Array.from(Array(h), () => Array.from(Array(n), () => Array(m).fill(false)));

input.map((str, row) => str.split(" ").map((v, col) =>{
    const el = Number(v)
    let z = parseInt(row / n)
    if (el === -1) {
        visited[z][row % n][col] = true;
        tomatoes--;
    }
    if (el === 1) {
        queue.push([row % n, col, z, 0])
        visited[z][row % n][col] = true;
        tomatoes--;
    }
}))

const [dx, dy, dz] = [[1, 0, -1, 0, 0, 0], [0, 1, 0, -1, 0, 0], [0, 0, 0, 0, 1, -1]];
let idx = 0
while (queue.length != idx) {
    const [x, y, z, days] = queue[idx];
    for (let i = 0; i < 6; i++) {
        const [nx, ny, nz] = [x + dx[i], y + dy[i], z + dz[i]]
        if (nx < 0 || ny < 0 || nz < 0 || nx >= n || ny >= m || nz >= h) continue;
        if (!visited[nz][nx][ny]) {
            visited[nz][nx][ny] = true;
            queue.push([nx, ny, nz, days + 1]);
            tomatoes--;
        }
    }
    idx++;
    ans = days;
}

console.log(tomatoes ? -1 : ans)