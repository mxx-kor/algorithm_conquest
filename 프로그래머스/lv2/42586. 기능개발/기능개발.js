function solution(progresses, speeds) {
    let answer = [];
    let day = 0;
    let cnt = 0;
    while (progresses.length) {
        if ((progresses[0] + day * speeds[0]) >= 100) {
            progresses.shift()
            speeds.shift()
            cnt += 1
        } else {
            if (cnt > 0) {
                answer.push(cnt)
                cnt = 0
            }
            day += 1
        }
    }
    answer.push(cnt)
    return answer;
}