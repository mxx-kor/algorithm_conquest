const fs = require('fs');
const inputFile = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(inputFile).toString().trim().split('\n');

const [N, _] = input.shift().split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const inDegrees = Array(N + 1).fill(0);

input.forEach((value) => {
  const [prev, next] = value.split(' ').map(Number);
  graph[prev].push(next);
  inDegrees[next] += 1;
});

const queue = [];
for (let i = 1; i <= N; i++) {
  if (inDegrees[i] === 0) {
    queue.push(i);
  }
}

const result = [];
while (queue.length) {
  const n = queue.pop();
  result.push(n);
  graph[n].forEach((v) => {
    inDegrees[v] -= 1;
    if (inDegrees[v] === 0) {
      queue.push(v);
    }
  });
}

console.log(result.join(' '));
