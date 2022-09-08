let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let odd = [];
input.map((el) => {
    if (el % 2 != 0) {
        odd.push(Number(el))
    }
})
if (odd.length) {
    console.log(odd.reduce((sum, c) => sum + c))
    console.log(Math.min(...odd))
}else {
    console.log(-1)
}