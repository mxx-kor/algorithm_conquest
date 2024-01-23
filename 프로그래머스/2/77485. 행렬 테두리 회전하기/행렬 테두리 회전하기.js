const rotateArray = (board, query) => {
    const [x1, y1, x2, y2] = query.map((v) => v - 1)
    let temp = board[x1][y1]
    let minNum = temp
    // 좌
    for (let i = x1; i < x2; i++) {
        board[i][y1] = board[i + 1][y1]
        minNum = Math.min(minNum, board[i + 1][y1])
    }
    // 하
    for (let j = y1; j < y2; j++) {
        board[x2][j] = board[x2][j + 1]
        minNum = Math.min(minNum, board[x2][j + 1])
    }    
    // 우
    for (let k = x2; k > x1; k--) {
        board[k][y2] = board[k - 1][y2]
        minNum = Math.min(minNum, board[k - 1][y2])
    }
    // 상
    for (let l = y2; l > y1; l--) {
        board[x1][l] = board[x1][l - 1]
        minNum = Math.min(minNum, board[x1][l - 1])
    }  
      
    board[x1][y1 + 1] = temp
    
    return minNum
}

function solution(rows, columns, queries) {
    const board = Array.from({length: rows}, (_, row) => Array.from({length: columns}, (_, column) => (row * columns) + (column + 1)))
    
    return queries.map((query) => rotateArray(board, query))
}