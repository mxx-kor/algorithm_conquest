function solution(n, costs) {
    let ans = 0;
    const parent = Array.from({length: n}, (_, i) => i)
    
    const findParent = (v) => {
        if (parent[v] !== v) return findParent(parent[v])
        return v
    }
    
    const unionParent = (a, b) => {
        a = findParent(a)
        b = findParent(b)
        if (a < b) parent[b] = a;
        else parent[a] = b;
    }
    
    costs.sort((a, b) => a[2] - b[2]);
    
    costs.forEach((cost) => {
        const [a, b, c] = cost
        if (findParent(a) !== findParent(b)) {
            unionParent(a, b)
            ans += c
        }
    })
    
    return ans;
}