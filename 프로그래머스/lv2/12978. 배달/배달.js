function solution(N, road, K) {
    const dist = Array(N + 1).fill(Infinity)
    const lines = Array.from({length: N + 1}, () => []);
    road.forEach(([start, end, time]) => {
        lines[start].push({to: end, cost: time})
        lines[end].push({to: start, cost: time})
    })
    
    const queue = [{to: 1, cost: 0}]
    dist[1] = 0

    while (queue.length) {
        const { to } = queue.shift()
        lines[to].forEach((next) => {
            if (dist[next.to] > dist[to] + next.cost) {
                dist[next.to] = dist[to] + next.cost;
                queue.push(next)
            }
        })
        console.log(dist)
    }

    return dist.filter((item) => item <= K).length
}