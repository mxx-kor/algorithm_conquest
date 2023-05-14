function solution(n) {
    const nums = Array.from({ length: 300 }, (_, i) => i + 1);
    const noThree = nums.filter((n) => n % 3 !== 0 && !String(n).includes('3'))
    
    return noThree[n - 1]
}