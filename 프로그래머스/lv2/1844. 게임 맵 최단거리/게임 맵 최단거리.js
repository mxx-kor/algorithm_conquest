function solution(maps) {
    const dx = [0, 0, 1, -1]
    const dy = [1, -1, 0, 0]
    const row = maps.length
    const col = maps[0].length
    const visited = maps
    const queue = [[0, 0, 1]]
    
    while (queue.length) {
        const [x, y, cnt] = queue.shift()
        if (x === row - 1 && y === col - 1) return cnt
        dx.forEach((_, idx) => {
            const nx = x + dx[idx]
            const ny = y + dy[idx]
            if (nx >= 0 && nx < row && ny >= 0 && ny < col && visited[nx][ny] === 1) {
                visited[nx][ny] = 0
                queue.push([nx, ny, cnt + 1])
            }
        })
    }
    return -1;
}