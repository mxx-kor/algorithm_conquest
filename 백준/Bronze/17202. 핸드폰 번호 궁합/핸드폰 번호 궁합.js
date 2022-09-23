let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [a , b] = input
let comb = []
for (let i = 0; i < a.length; i++) {
    comb.push(Number(a[i]))
    comb.push(Number(b[i]))
}

while (comb.length !== 2) {
    tmp = [];
    for (let i = 0; i < comb.length-1; i++) {
        tmp.push((comb[i] + comb[i+1]) % 10)
    }
    comb = tmp
}

console.log(comb.join(''))