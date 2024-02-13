function solution(data, col, row_begin, row_end) {
    let ans = 0
    const sorted_data = data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) return b[0] - a[0]
        
        return a[col - 1] - b[col - 1]
    })
    
    for (let i = row_begin; i <= row_end; i++) {
        const calc = sorted_data[i - 1].reduce((acc, curr) => acc + (curr % i) , 0)
        ans ^= calc
    }
    
    return ans;
}