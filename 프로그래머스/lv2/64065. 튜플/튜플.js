function solution(s) {
    const ans = [];
    const a = s.replace(/{/g, '[')
    const b = eval(a.replace(/}/g, ']'));
    const sorted = b.sort((a, b) => a.length - b.length)
    b.forEach((arr) => {
        arr.forEach((num) => {
            if (!ans.includes(num)) {
                ans.push(num)
            }
        })
    })
    return ans;
}