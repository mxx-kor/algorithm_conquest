let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift()

for (let n of input) {
    const fibonacci = [[1, 0], [0, 1]];
    for (let j = 2; j <= n; j++) {
        fibonacci[j] = [
            fibonacci[j-1][0] + fibonacci[j-2][0],
            fibonacci[j-1][1] + fibonacci[j-2][1]
        ];
    }

    console.log(fibonacci[n].join(" "));
}