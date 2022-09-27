let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let n = Number(input.shift())
let ans = []
for (let i = 0; i < n; i++) {
    const len = Number(input[i])
    const arr = Array(len + 1).fill(true)
    arr[0] = false
    for (let a = 2; a <= len; a++) {
        for (let b = a; b <= len; b+=a) {
            arr[b] = !arr[b];
        }
    }
    ans.push(arr.filter(element => true === element).length);

}
console.log(ans.join('\n'))