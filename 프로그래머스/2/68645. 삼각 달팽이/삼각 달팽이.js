function solution(n) {
    const answer = [];
    const array = Array.from({length: n }, (_, i) => Array(i + 1).fill(0))
    let [currentValue, currentRow, currentCol] = [0, -1, 0]
    
    while (n > 0) {
        for (let i = 0; i < n; i++) {
            currentRow++
            currentValue++
            array[currentRow][currentCol] = currentValue
        }
        
        for (let j = 0; j < n - 1; j++) {
            currentCol++
            currentValue++
            array[currentRow][currentCol] = currentValue
        }
        
        for (let k = 0; k < n - 2; k++) {
            currentRow--
            currentCol--
            currentValue++
            array[currentRow][currentCol] = currentValue
        }
        
        n -= 3
    }
    
    return array.flat();
}
