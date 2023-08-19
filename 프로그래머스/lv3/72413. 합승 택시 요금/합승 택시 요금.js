function solution(n, s, a, b, fares) {
    const lines = Array.from({length: n + 1}, () => Array(n + 1).fill(Infinity))
    for (let i = 1; i <= n; i++) {
        lines[i][i] = 0
    }
    
    fares.forEach(([start, end, fee]) => {
        lines[start][end] = fee
        lines[end][start] = fee
    })
    
    for(let k = 1; k <= n; k++){
        for(let i = 1; i <= n; i++){
            for(let j = 1; j <= n; j++){
                lines[i][j] = Math.min(lines[i][j], lines[i][k] + lines[k][j]);
            }
        }
    }
    
    let ans = Infinity
    
    for (let i = 1; i <= n; i++) {
        ans = Math.min(ans, lines[s][i] + lines[i][a] + lines[i][b])
    }
    
    return ans;
}