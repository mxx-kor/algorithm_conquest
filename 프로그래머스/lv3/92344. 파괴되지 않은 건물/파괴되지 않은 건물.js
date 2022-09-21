function solution(board, skill) {
    var answer = 0;
    const row = board.length;
    const col = board[0].length;
    const graph = Array.from(Array(row + 1), () => Array(col + 1).fill(0))
    for (const [type, r1, c1, r2, c2, degree] of skill) {
        graph[r1][c1] += type === 1 ? -degree : degree;
        graph[r1][c2 + 1] += type === 1 ? degree : -degree;
        graph[r2 + 1][c1] += type === 1 ? degree : -degree;
        graph[r2 + 1][c2 + 1] += type === 1 ? -degree : degree;
    }
    
    for (let i = 0; i < row; i++) {
        let sum = 0;
        for (let j = 0; j < col; j++) {
            sum += graph[i][j];
            graph[i][j] = sum;
        }
    }
    
    for(let i = 0; i < col; i++){
        let sum = 0;
        for(let j = 0; j < row; j++){
            sum += graph[j][i];
            graph[j][i] = sum;
        }
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            board[i][j] += graph[i][j];
            if (board[i][j] > 0) {
                answer++;
            }
        }
    }
    
    return answer;
}