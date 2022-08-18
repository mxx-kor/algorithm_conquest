function solution(s){
    let arr = [];
    for (let i of s) {
        if (i == "(") {
            arr.push(i)
        }else {
            if (arr.length === 0) {
                return false
            } else {
                arr.pop()
            }
        }
    }
    if (arr.length !== 0) {
        return false
    }else {
        return true
    }
}
