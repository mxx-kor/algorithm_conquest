function solution(storey) {
    const storeyArray = [0, ...String(storey).split("").map(Number)]
    
    for (let i = storeyArray.length - 1; i > 0; i--) {
        if (storeyArray[i] < 5) continue
        else if (storeyArray[i] === 5 && storeyArray[i-1] < 5) continue
        
        storeyArray[i] = 10 - storeyArray[i]
        storeyArray[i - 1]++
    }
    
    return storeyArray.reduce((acc, curr) => acc + curr, 0)
}