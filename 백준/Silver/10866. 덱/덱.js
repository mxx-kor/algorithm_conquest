let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split("\n")

const push_front = (x) => arr.unshift(x)
const push_back = (x) => arr.push(x)
const pop_front = () => arr.length === 0 ? -1 : arr.shift()
const pop_back = () => arr.length === 0 ? -1 : arr.pop()
const size = () => arr.length 
const empty = () => arr.length === 0 ? 1 : 0
const front = () => arr.length === 0 ? -1 : arr[0]
const back = () => arr.length === 0 ? -1 : arr.at(-1)

let arr = []
let answer = '';

for (let i = 1; i < Number(input[0]) + 1; i++) {
    const [cmd, num] = input[i].split(" ")
    switch (cmd) {
        case 'push_front':
            push_front(Number(num));
            break;
        case 'push_back':
            push_back(Number(num));
            break;
        case 'pop_front':
            answer += pop_front() + '\n';
            break;
        case 'pop_back':
            answer += pop_back() + '\n';
            break; 
        case 'size':
            answer += size() + '\n';
            break; 
        case 'empty':
            answer += empty() + '\n';
            break;
        case 'front':
            answer += front() + '\n';
            break;
        case 'back':
            answer += back() + '\n';
            break; 
    }
}

console.log(answer);