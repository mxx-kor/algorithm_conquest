let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let n  = Number(input.shift());
let dp = Array(101).fill(0)
for (let i = 1; i < dp.length; i++) {
    if (i == 1 || i == 2 || i == 3) {
        dp[i] = 1
    }else {
        dp[i] = dp[i-3] + dp[i-2]
    }
}
for (let i = 0; i < n; i++) {
    const target = Number(input[i])
    console.log(dp[target])
}