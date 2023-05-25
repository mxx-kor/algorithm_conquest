let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let ans = 0;
const nodes_length = Number(input.shift());
input.shift();
const graph = new Map();
const visited = Array(nodes_length + 1).fill(false);
const makeGraph = (arr) => {
  arr.forEach((el) => {
    const [from, to] = el.split(' ').map(Number);
    graph[from] = graph[from] ? [...graph[from], to] : [to];
    graph[to] = graph[to] ? [...graph[to], from] : [from];
  });
};
visited[1] = true;
const dfs = (start) => {
  if (!graph[start]) return;
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = true;
      ans++;
      dfs(end);
    }
  }
};
makeGraph(input);
dfs(1);
console.log(ans);
