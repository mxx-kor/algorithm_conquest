function solution(m, n, board) {
    board = board.map((row) => row.split(""))
    
    while (true) {
        let founded = []
        
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const target = board[i][j]

                if (target && target === board[i][j + 1] && target === board[i + 1][j] && target === board[i + 1][j + 1]) {
                    founded.push([i, j])
                }
            }
        }
        
        if (!founded.length) return [...board].flat().filter(v => !v).length;
        
        founded.forEach(([r, c]) => {
            board[r][c] = 0;
            board[r][c + 1] = 0;
            board[r + 1][c] = 0;
            board[r + 1][c + 1] = 0;
        });
        
        for (let j = 0; j < n; j++) {
            let k = m - 1;
            for (let i = m - 1; i >= 0; i--) {
                if (board[i][j] !== 0) {
                    board[k][j] = board[i][j];
                    k--;
            }
        }
            while (k >= 0) {
                board[k][j] = 0;
                k--;
            }
        }
    }
}