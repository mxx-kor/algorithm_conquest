function solution(price, money, count) {
    let total = 0
    for (let i = 1; i < count + 1; i++) {
        total += price * i
    }
    return money - total >= 0 ? 0 : total - money 
}