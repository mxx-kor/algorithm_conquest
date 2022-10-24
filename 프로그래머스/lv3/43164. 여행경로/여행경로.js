function solution(tickets) {
    const graph = {};
    for (const [dep, dest] of tickets) {
        graph[dep] = graph[dep] ? [...graph[dep], dest] : [dest]
    }
    for (const key in graph) {
        graph[key].sort((a, b) => a > b ? -1: 1);
    }
    const stack = ["ICN"];
    let ans = [];
    while (stack.length) {
        const top = stack.at(-1);
        if (graph[top] && graph[top].length > 0) {
            stack.push(graph[top].pop());
        } else {
            ans.push(stack.pop());
        }
    }
    return ans.reverse();
}