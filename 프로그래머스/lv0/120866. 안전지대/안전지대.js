function solution(board) {
    const row_len = board.length
    const col_len = board[0].length
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [-1, 1], [-1, -1], [1, -1]]
    let cnt = row_len * col_len

    board.map((row, row_idx) => {
        row.map((col, col_idx) => {
            if (col === 1) {
                cnt--
                dir.map(([dx, dy]) => {
                    const nx = row_idx + dx
                    const ny = col_idx + dy
                    if (nx < 0 || nx >= row_len || ny < 0 || ny >= col_len) return 
                    if (board[nx][ny] >= 1) return
                    board[nx][ny] = 2
                    cnt--
                })
            }
        })
    })
    
    return cnt;
}