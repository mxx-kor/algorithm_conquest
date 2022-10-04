let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const arr = []
const ans = []
input.shift()

input.forEach((el) => arr.push(el.split(" ")))

arr.sort()
arr.sort((a, b) => {
    if (Number(a[1]) === Number(b[1])) {
        if (Number(a[2]) === Number(b[2])) {
            return Number(b[3]) - Number(a[3])
        }
        return Number(a[2]) - Number(b[2])
    }
    return b[1] - a[1]
})

arr.forEach((el) => ans.push(el[0]))
console.log(ans.join("\n"))