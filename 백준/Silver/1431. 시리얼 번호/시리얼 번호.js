const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const TC = +input.shift()

input.sort()

input.sort((a,b) =>{
  if(a.length !== b.length){
    return a.length - b.length
  }
  const sumA = a.match(/\d/g) ? a.match(/\d/g).reduce((acc,v)=> acc + +v, 0) : 0
  const sumB = b.match(/\d/g) ? b.match(/\d/g).reduce((acc,v)=> acc + +v, 0) : 0
  
  if(sumA !== sumB){
    return sumA - sumB
  }
})

console.log(input.join('\n'))