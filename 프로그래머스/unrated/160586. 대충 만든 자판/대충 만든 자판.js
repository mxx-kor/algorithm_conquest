function solution(keymap, targets) {
    const ans = []
    const hashMap = new Map()
    for (const key of keymap) {
        for (let i = 0; i < key.length; i++) {
            if (!hashMap.has(key[i]) || i + 1 < hashMap.get(key[i])) {
                hashMap.set(key[i], i + 1)
            } 
        }
    }
    
    for (const target of targets) {
        let cnt = 0
        for (let i = 0; i < target.length; i++) {
            cnt += hashMap.get(target[i])
        }
        ans.push(cnt || -1)
    }

    return ans;
}