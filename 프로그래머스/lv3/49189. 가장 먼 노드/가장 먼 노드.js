function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => [])
    for (const [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }
    const dist = Array(n + 1).fill(0);
    dist[1] = 1;
    
    const queue = [];
    queue.push(1);
    while (queue.length) {
        const src = queue.shift();
        for (const dest of graph[src]) {
            if (dist[dest] === 0) {
                queue.push(dest);
                dist[dest] = dist[src] + 1
            }
        }
    }
    
    const max = Math.max(...dist);
    return dist.filter(el => el === max).length
}