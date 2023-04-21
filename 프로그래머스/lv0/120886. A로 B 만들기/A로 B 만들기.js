function solution(before, after) {
    const b = before.split('').sort().join('')
    const a = after.split('').sort().join('')
    
    return a === b ? 1 : 0;
}