function solution(topping) {
    const hash = new Map()
    const cake = new Set()
    let ans = 0
    
    topping.map((el) => {
        hash.has(el) ? hash.set(el, hash.get(el) + 1) : hash.set(el, 1)
    })
    
    topping.map((el) => {
        let cnt = hash.get(el) - 1
        cake.add(el)
        cnt === 0 ? hash.delete(el) : hash.set(el, cnt)
        if (hash.size === cake.size) ans++
    })
    
    return ans
}