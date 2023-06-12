const GCD = (num1, num2) => {
    let gcd = 1;
    
    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}

function solution(a, b) {
    const gcd = GCD(a, b)
    b /= gcd
   
    while (b % 2 === 0) b /= 2
    while (b % 5 === 0) b /= 5
    return b === 1 ? 1 : 2
}