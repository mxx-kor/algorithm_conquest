let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const n = input.shift()
let arr = input[0].split(" ").map(Number)
let toChange = -1

for (let i = n - 1; i > 0; i--) {
    if (arr[i - 1] > arr[i]) {
        toChange = i - 1;
        break
    }
}

if (toChange === -1) console.log(-1) 
else {
    let i = n - 1;
    while (arr[toChange] < arr[i]) i--;
    
    [arr[toChange], arr[i]] = [arr[i], arr[toChange]];

    let rest = arr.slice(toChange + 1);

    rest.sort((a, b) => b - a);
    console.log([...arr.slice(0, toChange + 1), ...rest].join(" "));
}