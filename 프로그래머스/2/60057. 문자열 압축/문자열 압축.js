function solution(s) {
    let ans = s.length
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let sentence = ""
        let last = 0
        
        while (last < s.length) {
            let cnt = 1
            while (s.slice(last, last + i) === s.slice(last + i, last + i + i)) {
                cnt++
                last += i
            }
            
            if (cnt > 1) {
                sentence += cnt
            }
            sentence = sentence + s.slice(last, last + i);
            last += i
        }
        
        ans = Math.min(ans, sentence.length)
    }
    
    return ans
}