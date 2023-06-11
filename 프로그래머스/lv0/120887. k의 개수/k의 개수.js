function solution(i, j, k) {
    let ans = 0;
    for (let a = i; a <= j; a++) {
        const arr = a.toString().split('')
        arr.map((num) => {
            if (num === k.toString()) ans++
        })
    }
    return ans
}