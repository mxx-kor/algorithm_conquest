function solution(maps) {
    const ans = []
    const [row, col] = [maps.length, maps[0].length]
    const visited = Array.from({length: row}, () => Array(col).fill(0))
    
    const dx = [0, 0, 1, -1]
    const dy = [1, -1, 0, 0]
    
    const bfs = (r, c) => {
        let cnt = 0
        const queue = [[r, c]]
        cnt += Number(maps[r][c])
        visited[r][c] = 1
        
        while (queue.length) {
            const [x, y] = queue.shift()
            
            dx.forEach((_, idx) => {
                const nx = x + dx[idx]
                const ny = y + dy[idx]
                if (nx >= 0 && nx < row && ny >= 0 && ny < col && !visited[nx][ny] && maps[nx][ny] !== "X") {
                    visited[nx][ny] = 1
                    cnt += Number(maps[nx][ny])
                    queue.push([nx, ny])
                }
            })
        }
        
        ans.push(cnt)
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (maps[i][j] !== "X" && !visited[i][j]) bfs(i, j)
        }
    }
    
    return ans.length ? ans.sort((a, b) => a - b) : [-1];
}