function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
   }
  return result;
}

function solution(n, k) {
    let answer = [];
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    while(n > 0) {
        let num = Math.ceil(k / factorial(n-1));
        answer.push(arr.splice(num-1, 1)[0])
        k = k % factorial(n-1)
        n--;
    }
    return answer;
}


// import math
// def solution(n, k):
//     answer = []
//     arr = [i for i in range(1, n + 1)]
//     print(-1//1)
//     while(arr):
//         answer.append(arr.pop((k-1) // math.factorial(n-1)))
//         k = k % math.factorial(n-1)
//         n -= 1
//     return answer