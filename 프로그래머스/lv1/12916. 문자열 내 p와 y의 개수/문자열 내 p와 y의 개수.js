function solution(s){
    s = s.toLowerCase()
    let cntP = 0
    let cntY = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p") {
            cntP ++
        } else if(s[i] === "y") {
            cntY ++
        }
    }

    return (cntP == cntY) ? true:false
}