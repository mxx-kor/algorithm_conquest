const fs = require('fs');
const inputFile = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [str, explodeStr] = fs
  .readFileSync(inputFile)
  .toString()
  .trim()
  .split('\n');

const stack = [];
const explodeStrLen = explodeStr.length;

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
  if (str[i] === explodeStr[explodeStrLen - 1]) {
    const check = stack.slice(-explodeStrLen).join('');
    if (check === explodeStr) stack.splice(-explodeStrLen);
  }
}

console.log(stack.length ? stack.join('') : 'FRULA');