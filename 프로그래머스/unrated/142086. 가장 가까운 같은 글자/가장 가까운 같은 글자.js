function solution(s) {
    const ans = []
    for (let i = 0; i < s.length; i++) {
        let dist = 0
        for (let j = 0; j < i; j++) {
            if (s[j] === s[i]) {
                dist = i - j 
            }
        }
        ans.push(dist ? dist : -1)
    }
    return ans;
}