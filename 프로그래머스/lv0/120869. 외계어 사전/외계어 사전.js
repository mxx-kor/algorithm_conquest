function solution(spell, dic) {
    const check = dic.map((word) => {
        let cnt = 0
        spell.map((char) => {
            if (word.includes(char)) cnt ++
        })
        if (cnt === spell.length) return true
        else return false
    })
    return check.includes(true) ? 1 : 2
}