function solution(s) {
    let [tmp, cnt] = [0, 0]
    while (s !== '1') {
        let sLen = s.length
        s = s.replace(/0/g, "").length
        cnt += sLen - s
        s = s.toString(2)
        tmp ++
    }
    return [tmp, cnt];
}