function solution(board)
{
    let answer = 0;
    const row = board.length, col = board[0].length
    if (row < 2 || col < 2) return 1
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (board[i][j] !== 0) {
                let tiny = Math.min(board[i-1][j-1], board[i-1][j], board[i][j-1]);
                board[i][j] = tiny + 1;             
            }
            answer = Math.max(answer, board[i][j])
        } 
    }
    

    return answer ** 2;
}