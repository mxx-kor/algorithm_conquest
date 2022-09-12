let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const t = Number(input.shift())

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
const bfs = (x, y) => {
    let queue = [[x, y]];
    visited[x][y] = true;
    while (queue.length) {
        const [x, y] = queue.shift()
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            if (graph[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true
                queue.push([nx, ny])
            }
        }
    }
}   

for (let i = 0; i < t; i++) {
    var [m, n, k] = input.shift().split(' ').map(Number);
    let cnt = 0
    var graph = Array.from(Array(n), () => Array(m).fill(0));
    var visited = Array.from(Array(n), () => Array(m).fill(false));
    for (let j = 0; j < k; j++) {
        const [x, y] = input.shift().split(' ').map(Number);
        graph[y][x] = 1;
    } 

    for (let a = 0; a < n; a++) {
        for (let b = 0; b < m; b++) {
            if (graph[a][b] === 1 && visited[a][b] === false) {
                bfs(a, b)
                cnt ++
            }
        }
    }
    
    console.log(cnt)
}