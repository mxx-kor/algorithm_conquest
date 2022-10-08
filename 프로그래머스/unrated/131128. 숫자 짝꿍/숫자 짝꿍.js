function solution(X, Y) {
    var answer = [];
    let xSet = new Set(X)
    let ySet = new Set(Y)
    Set.prototype.intersection = function (set) {
      return new Set([...this].filter(v => set.has(v)));
    };
    let inter = xSet.intersection(ySet)
    if (inter.size === 0) return '-1';
    for (let i of inter) {
        let xCnt = X.split('').filter(element => i === element).length;
        let yCnt = Y.split('').filter(element => i === element).length;
        let minInter = Math.min(xCnt, yCnt)
        for (let j = 0; j < minInter; j++) {
            answer.push(i)
        }
    }
    answer.sort((a, b) => (b - a))
    if (answer[0] === '0') return '0';
    return answer.join('')
}