let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = input.shift().split(" ").map(Number)

let graph = []
for (let i of input) {
    graph.push(i.split(" ").map(Number))
}

let visited = []
for (let i = 0; i < n; i++) {
    visited.push(Array.from(Array(m), (v) => false));
}

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];

const bfs = (x, y) => {
    let size = 1;
    let queue = [];
    queue.push([x, y])
    visited[x][y] = true

    while (queue.length) {
        const [x, y] = queue.shift()
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]]

            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

            if (graph[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true
                queue.push([nx, ny])
                size += 1
            }
        }
    }
    return size
}

let paints = 0
let maxSize = 0

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if(graph[i][j] === 1 && !visited[i][j]) {
            paints += 1
            maxSize = Math.max(maxSize, bfs(i, j))
        }
    }
}

console.log(paints)
console.log(maxSize)