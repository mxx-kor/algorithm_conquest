let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const binarySearch = (arr, elem, L, R) => {
    let result = L;
    let mid;
    while (L <= R) {
      mid = Math.floor((L + R) / 2);
      if (arr[mid] < elem) {
        result = mid + 1;
        L = mid + 1;
      } else {
        R = mid - 1;
      }
    }
    return result;
  };
const t = Number(input.shift());
const ans = []
for (let i = 0; i < t; i++) {
    const [n, m] = input.shift().split(" ").map(Number);
    const A = input.shift().split(" ").map(Number);
    const B = input.shift().split(" ").map(Number);
    B.sort((a, b) => a - b)

    ans.push(A.reduce((acc, curr) => {
        const result = binarySearch(B, curr, 0, m-1);
        return acc + result;
    }, 0));
}

console.log(ans.join('\n'))