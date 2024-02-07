const isRight = (str) => {
    const stack = []
    
    for (const s of str) {
        if (s === "(") stack.push(s)
        else {
            if (!stack.length) return false
            stack.pop()
        }
    }
        
    return true
}

const reverseBracket = (str) => {
    let result = ""
    
    for (const s of str) {
        result += s === "(" ? ")" : "("
    }
    
    return result
}

function solution(p) {
    if (!p.length) return "";
    
    let u, v;
    let cnt = 0;
    
    for (let i = 0; i < p.length; i++) {
        p[i] === "(" ? cnt++ : cnt--
        
        if (cnt === 0) {
            u = p.slice(0, i + 1);
            v = p.slice(i + 1);
            break;
        }
    }
    
    if (isRight(u)) return u + solution(v)
    else return "(" + solution(v) + ")" + reverseBracket(u.slice(1, u.length - 1))
}