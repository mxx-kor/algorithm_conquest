function solution(gems) {
    let ans = [0, gems.length]
    let p1 = 0
    let p2 = 0
    
    const gemKinds = new Set(gems).size
    const collect = new Map();
    collect.set(gems[0], 1);
    
    while (p1 < gems.length && p2 < gems.length) {
        if (collect.size === gemKinds) {
            if (p2 - p1 < ans[1] - ans[0]) {
                ans = [p1 + 1, p2 + 1]
            }
            
            collect.set(gems[p1], collect.get(gems[p1]) - 1)
            
            if (collect.get(gems[p1]) === 0) {
                collect.delete(gems[p1])
            }
            
            p1 += 1
        } else {
            p2 += 1
            collect.set(gems[p2], 1 + (collect.get(gems[p2]) || 0))
        }
    }
    return ans;
}