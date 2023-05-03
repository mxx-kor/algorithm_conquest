function solution(s) {
    let cnt = 0;
    let stack = [];
    
    [...s].map((char, idx) => {
        stack.push(s[idx])
        
        const same = stack.filter((item) => item === stack[0])
        const diff = stack.filter((item) => item !== stack[0])
        
        if (same.length === diff.length) {
            cnt += 1
            stack = []
        }
    })
    
    if (stack.length) {
        cnt += 1
    }
    return cnt
}