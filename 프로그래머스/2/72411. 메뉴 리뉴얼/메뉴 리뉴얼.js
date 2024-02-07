const getCombinations = (arr, len) => {
    const result = [];
    
    if (len === 1) return arr.map((el) => [el])
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, len - 1);
        const attached = combinations.map((el) => [fixed, ...el].join(""));
        
        result.push(...attached)
    })
    
    return result
}

function solution(orders, course) {
    const ans = []
    
    course.forEach((length) => {
        const hash = new Map()
        let maxNum = 0
        
        orders.forEach((order) => {
            const sortedOrder = order.split("").sort()
            const combinations = getCombinations(sortedOrder, length)
            
            combinations.forEach((c) => {
                hash.has(c) ? hash.set(c, hash.get(c) + 1) : hash.set(c, 1)
            })
            
            hash.forEach((value) => {
                maxNum = Math.max(value, maxNum)
            })
        })
        
        hash.forEach((value, key) => {
            if (value === maxNum && maxNum >= 2) ans.push(key)
        })
    })
    
    return ans.sort()
}