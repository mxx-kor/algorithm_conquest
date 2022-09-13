let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
let asc_arr = [...input]
let des_arr = [...input]
asc_arr.sort((a, b) => a - b);
des_arr.sort((a, b) => b - a);

if (JSON.stringify(input) === JSON.stringify(asc_arr)) {
    console.log('ascending')
}else if (JSON.stringify(input) === JSON.stringify(des_arr)) {
    console.log('descending')
}else {
    console.log('mixed')
}