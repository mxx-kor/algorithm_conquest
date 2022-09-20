function isPrime(num) {
  if(num <= 1) {
    return false;
  }

  if( num % 2 === 0) { 
    return num === 2 ? true : false;
  }
  const sqrt = parseInt(Math.sqrt(num));

  for( let divider = 3; divider <= sqrt; divider += 2) {

    if(num % divider === 0) {
      return false;
    }
    
  }
  
  return true;
}

function solution(n, k) {
    var answer = 0;
    const num = n.toString(k).split('0')
    for (let i of num) {
        if (i.length > 0 && isPrime(Number(i))) {
            answer++
        }
    }
    return answer;
}