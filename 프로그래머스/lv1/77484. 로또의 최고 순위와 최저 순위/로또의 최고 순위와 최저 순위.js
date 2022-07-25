function solution(lottos, win_nums) {
    let match = 0
    let zero = 0
    for (let i in lottos) {
        if (lottos[i] == 0) {
            zero ++
        }
        for (let j in win_nums) {
            if (lottos[i] == win_nums[j]) {
                match ++
            }
        }
    }
    
    return [7 - Math.max(match + zero, 1), 7 - Math.max(match, 1)]
}