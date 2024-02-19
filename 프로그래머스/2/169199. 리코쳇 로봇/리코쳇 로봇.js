function solution(board) {
    let ans = 0
    const queue = []
    board = board.map((b, index) => {
        if (b.includes("R")) {
            queue.push([index, b.indexOf("R")])
        }
        return b.split("")
    })
    const dx = [0, 0, -1, 1]
    const dy = [-1, 1, 0, 0]
    const row = board.length
    const col = board[0].length
    
    board[queue[0][0]][queue[0][1]] = "V"
    
    while (queue.length) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift()
            
            for(let j = 0; j < 4; j++) {
                let nx = x + dx[j]
                let ny = y + dy[j]

                while (nx >= 0 && nx < row && ny >= 0 && ny < col && board[nx][ny] !== "D") {
                    nx = nx + dx[j]
                    ny = ny + dy[j]
                }

                nx -= dx[j];
                ny -= dy[j];

                if (board[nx][ny] === "G") return ans + 1
                
                if (board[nx][ny] !== "V") {
                    board[nx][ny] = "V"
                    queue.push([nx, ny])
                }
            }
        }
        ans++
    }
    
    return -1;
}