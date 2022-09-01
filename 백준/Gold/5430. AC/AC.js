let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split("\n")
const n = Number(input.shift())

for (let i = 0; i < n; i++) {
    let cmd = input.shift()
    let a = input.shift()
    let arr = JSON.parse(input.shift())
    let isReversed = false
    let isError = false

    for (let j of cmd) {
        if (j === 'R') {
            isReversed = !isReversed
        } else if (j === 'D') {
            if (arr.length === 0) {
                isError = !isError
                break;
            } else {
                if (isReversed) arr.pop()
                else arr.shift()
            }
        }
    }

    if (isError) console.log('error')
    else {
        if (isReversed) console.log(JSON.stringify(arr.reverse()));
		else console.log(JSON.stringify(arr));
    }
}


