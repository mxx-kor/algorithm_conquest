let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split('\n')

const n = Number(input[0])

for (let i = 1; i < n + 1; i ++) {
    let s = input[i].split("")
    let front = []
    let back = []

    for (let j of s) {
        switch(j) {
            case '<':
                if (front.length > 0) back.push(front.pop());
                break;
            case '>':
                if (back.length > 0) front.push(back.pop());
                break;
            case '-':
                if (front.length > 0) front.pop();
                break
            default:
                front.push(j);
                break
        }   
    }

    console.log(front.join('')+back.reverse().join(''));
}