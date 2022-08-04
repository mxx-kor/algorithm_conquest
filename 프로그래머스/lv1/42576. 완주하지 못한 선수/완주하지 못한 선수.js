function solution(participant, completion) {
    const hash = new Map();
    for (let c of completion) {
        hash.get(c) ? hash.set(c, hash.get(c) + 1) : hash.set(c, 1)
    }
    for (let p of participant) {
        if(!hash.get(p)) {
            return p
        } else hash.set(p, hash.get(p)-1)
    }
}