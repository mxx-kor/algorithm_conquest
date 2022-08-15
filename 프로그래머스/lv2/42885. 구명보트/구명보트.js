function solution(people, limit) {
    let cnt = 0;
    people.sort((a, b) => (b - a))
    let i = 0
    let j = people.length - 1
    while(i < j) {
        let sum = people[i] + people[j]
        if (sum > limit) {
            i ++
        } else {
            i ++
            j --
        }
        cnt ++
    }
    if (i == j) cnt ++
    return cnt;
}