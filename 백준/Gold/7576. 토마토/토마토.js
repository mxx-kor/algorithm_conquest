let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [m, n] = input.shift().split(' ').map(Number);
let tomatoes = m * n, ans;
let queue = [];
let visited = Array.from(Array(n), () => Array(m).fill(false))
let graph = input.map((str, row) => str.split(' ').map((v, col) => {
    const ret = Number(v);
    if (ret === -1) {
        visited[row][col] = true
        tomatoes--;
    }
    if (ret === 1) {
        queue.push([row, col, 0])
        visited[row][col] = true
        tomatoes--;
    }
    return ret
}))

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
let idx = 0
while (queue.length != idx) {
    const [x, y, days] = queue[idx];
    for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]]
        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        if (!visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny, days+1]);
            tomatoes--;
        }
    }
    idx++
    ans = days
}

console.log(tomatoes ? -1 : ans)