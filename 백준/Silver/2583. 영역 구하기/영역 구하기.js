let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [m, n, k] = input.shift().split(" ").map(Number)
let rectangles = [];
for(i of input) {
    rectangles.push(i.split(" ").map(Number))
}

let graph = Array.from(Array(m), () => Array(n).fill(0))
let visited = Array.from(Array(m), () => Array(n).fill(false))

for (let i = 0; i < k; i++) {
    const [col1, row1, col2, row2] = rectangles[i]
    for (let r = row1; r < row2; r++) {
      for (let c = col1; c < col2; c++) {
        graph[r][c] = 1
      }
    }
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

            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

            if (graph[nx][ny] === 0 && !visited[nx][ny]) {
                visited[nx][ny] = true
                queue.push([nx, ny])
                size += 1
            }
        }
    }
    return size
}

let cnt = 0
let size = []
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if(graph[i][j] === 0 && !visited[i][j]) {
            cnt += 1
            size.push(bfs(i, j))
        }
    }
}

console.log(cnt)
console.log(size.sort((a, b) => a - b).join(" "))