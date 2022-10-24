const dfs = (n, computers, visited, start) => {
    const stack = [start];
    while (stack.length) {
        const top = stack.pop();
        visited[top] = true;
        
        for (let i = 0; i < n; i++) {
            if (!visited[i] && computers[top][i]) {
                stack.push(i)
            }
        }
    }
}

function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false);
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(n, computers, visited, i);
            answer += 1;
        }
    }
    return answer;
}