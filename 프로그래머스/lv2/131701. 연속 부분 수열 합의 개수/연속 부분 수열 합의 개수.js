function solution(elements) {
    const ans = new Set()
    const len = elements.length
    
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j < len; j++) {
            let sliced = elements.slice(j, j + i)
            if (i + j > len) {
                sliced = [...sliced, ...elements.slice(0, i + j - len)]
            }
            ans.add(sliced.reduce((acc, curr) => acc + curr, 0))
        }     
    }
    
    return ans.size
}