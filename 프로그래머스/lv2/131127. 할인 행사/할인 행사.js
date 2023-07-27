function solution(want, number, discount) {
    let ans = 0;
    
    const isMatch = (arr) => {
        const hash = new Map()
        let flag = true
        
        arr.forEach((el) => hash.set(el, (hash.get(el) || 0) + 1))
        want.forEach((item, idx) => {
            if (hash.get(item) !== number[idx]) flag = false
        })
        
        return flag
    }
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const arr = discount.slice(i, i + 10)
        
        if (isMatch(arr)) {
            ans++   
        }
    }
    
    return ans;
}