let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let minNum = Math.min(...input)
while (true) {
    let cnt = 0
    for (let i of input) {
        if (minNum % i === 0) {
            cnt++
        } 
    }
    if (cnt >= 3) {
        console.log(minNum);
        break      
    }
    minNum++
}