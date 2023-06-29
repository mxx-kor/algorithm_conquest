function solution(babbling) {
    const able = ["aya", "ye", "woo", "ma"]
    let cnt = 0
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < able.length; j++) {
            if (babbling[i].includes(able[j].repeat(2))) {
                break
            }
            
            babbling[i] = babbling[i].split(able[j]).join(" ")
        }
        if (babbling[i].split(" ").join('').length === 0) cnt++
    }
    return cnt
}