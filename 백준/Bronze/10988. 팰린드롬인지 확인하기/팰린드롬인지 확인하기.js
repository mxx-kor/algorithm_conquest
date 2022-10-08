let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let ans = 1
for (let i = 0; i < Math.floor(input.length / 2); i++) {
   if (input[i] === input.at(-i - 1)) continue;
   else {
      ans = 0;
      break
   }
}

console.log(ans)