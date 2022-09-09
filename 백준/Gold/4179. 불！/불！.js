let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let [r, c] = input.shift().split(' ').map(Number)

const graph = input.map((str) => str.split(''))
let f_visited = Array.from(Array(r), () => Array(c).fill(0));
let j_visited = Array.from(Array(r), () => Array(c).fill(0));
let j_queue = [];
let f_queue = [];

input.map((str, row) => str.split('').map((v, col) => {
    if (v === "J") {
        j_queue.push([row, col])
    }else if (v === "F") {
        f_queue.push([row, col])
    }
}))

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];

const bfs = () => {
    while (f_queue.length) {
        const [x, y] = f_queue.shift();
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]]
            if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
            if (!f_visited[nx][ny] & graph[nx][ny] !== '#') {
                f_visited[nx][ny] = f_visited[x][y] + 1;
                f_queue.push([nx, ny]);
            }
        }
    }
    
    while (j_queue.length) {
        const [x, y] = j_queue.shift();
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]]
            if (nx < 0 || ny < 0 || nx >= r || ny >= c) {
                return j_visited[x][y] + 1;
            }
            else if (!j_visited[nx][ny] && graph[nx][ny] !== '#') {
                if (!f_visited[nx][ny] || f_visited[nx][ny] > j_visited[x][y] + 1) {
                    j_visited[nx][ny] = j_visited[x][y] + 1;
                    j_queue.push([nx, ny]);
                }
            }
        }
    }
    return "IMPOSSIBLE"
}

console.log(bfs())

