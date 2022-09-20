let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('').sort();
let m = new Map();
let s = '';
let c = '';
let e = '';
let odd = 0

for (let i of input) {
    if (m[i]) {
        m[i] += 1
    }else {
        m[i] = 1
    }
}

for (let [k, v] of Object.entries(m)) {
    if (v % 2 != 0) {
        c += k
        v--
        odd++
    }
    for (let a = 0; a < v / 2; a++) {
        s += k;
        e = k + e
    }
}

odd > 1 ? console.log("I'm Sorry Hansoo") : console.log(s+c+e)