function solution(n, left, right) {
    var answer = [];
    let x = left % n;
    let y = Math.floor(left / n);
    for (let i = 0; i <= right - left; i++) {
        answer.push(Math.max(x, y) + 1)
        if (x + 1 < n) {
            x++;
        } else {
            y++;
            x = 0;
        }
        
    }
    
    return answer;
}