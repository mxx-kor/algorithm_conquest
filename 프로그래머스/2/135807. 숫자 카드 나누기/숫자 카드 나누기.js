const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

function solution(arrayA, arrayB) {
    let gcdA = 0
    let gcdB = 0
    
    for (let i = 0; i < arrayA.length; i++) {
        gcdA = gcd(gcdA, arrayA[i])
        gcdB = gcd(gcdB, arrayB[i])
    }
    
    if(arrayA.some(value => value % gcdB === 0)) {
        gcdB = 0
    }
    if(arrayB.some(value => value % gcdA === 0)) {
        gcdA = 0
    }
    
    return Math.max(gcdA, gcdB);
}