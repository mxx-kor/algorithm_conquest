const fs = require('fs');
const inputFile = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(inputFile).toString().trim().split('\n');
const [, buildings] = [Number(input[0]), input[1].split(' ').map(Number)];

const isVisible = (curHeight, startIndex, heights, direction) => {
  let prevSlope = -Infinity;
  let count = 0;

  for (
    let i = startIndex + direction;
    i >= 0 && i < heights.length;
    i += direction
  ) {
    let curSlope = (heights[i] - curHeight) / (i - startIndex);
    curSlope *= direction;

    if (prevSlope < curSlope) {
      prevSlope = curSlope;
      count += 1;
    }
  }

  return count;
};

let ans = 0;
buildings.forEach((building, index, arr) => {
  ans = Math.max(
    isVisible(building, index, arr, 1) + isVisible(building, index, arr, -1),
    ans
  );
});

console.log(ans);