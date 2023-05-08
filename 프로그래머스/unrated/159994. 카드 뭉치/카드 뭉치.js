function solution(cards1, cards2, goal) {
    for (const g of goal) {
        if (g === cards1[0]) {
            cards1.shift()
            continue
        }
        if (g === cards2[0]) {
            cards2.shift()
            continue
        }
        return 'No'
    }
    return 'Yes';
}