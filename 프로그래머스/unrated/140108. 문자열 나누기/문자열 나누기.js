function solution(s) {
    let arr = [];
    
    while(s.length) {
        let cnt = 0
        let same = 0;
        let diff = 0;
        
        for (let i = 0; i < s.length; i++) {
            s[0] === s[i] ? same++ : diff++
            if (same === diff) {
                cnt = i + 1
                break
            }
        }
        
        arr.push(s.slice(0, cnt))
        s = s.slice(cnt);
        if (cnt === 0) break
    }
    return arr.length
}