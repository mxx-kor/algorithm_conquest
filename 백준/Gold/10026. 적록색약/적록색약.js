let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const n = Number(input.shift())

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
const bfs = (x, y) => {
    let queue = [[x, y]];
    visited[x][y] = true;
    while (queue.length) {
        const [x, y] = queue.shift()
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if (graph[nx][ny] === graph[x][y] && !visited[nx][ny]) {
                visited[nx][ny] = true
                queue.push([nx, ny])
            }
        }
    }
}

let graph = input.map((el) => el.split(''))
let visited = Array.from(Array(n), () => Array(n).fill(false))
let cnt1 = 0
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
            bfs(i, j)
            cnt1 ++
        }
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (graph[i][j] === 'R') {
            graph[i][j] = 'G' 
        }
    }
}

visited = Array.from(Array(n), () => Array(n).fill(false))
let cnt2 = 0
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
            bfs(i, j)
            cnt2 ++
        }
    }
}

console.log(cnt1)
console.log(cnt2)
