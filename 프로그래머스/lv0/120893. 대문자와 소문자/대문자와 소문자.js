function solution(my_string) {
    let ans = '';
    for (let i of my_string) {
        if (i === i.toUpperCase()) {
            ans += i.toLowerCase()
        }else {
            ans += i.toUpperCase()
        }
    }
    return ans
}