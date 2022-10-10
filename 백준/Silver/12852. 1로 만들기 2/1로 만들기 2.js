let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const n = Number(input);
const dp = Array(n+1).fill(0);
const history = Array(n+1).fill(0);
const ans = [n];

for (let i = 2; i < n + 1; i++) {
  dp[i] = dp[i - 1] + 1
  history[i] = i - 1

  if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
    dp[i] = dp[i / 3] + 1
    history[i] = i / 3
  }
  if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
    dp[i] = dp[i / 2] + 1
    history[i] = i / 2
  }
}

let back_num = n

while (history[back_num] !== 0) {
  ans.push(history[back_num])
  back_num = history[back_num]
}

console.log(dp[n])
console.log(ans.join(" "))