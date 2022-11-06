function solution(hp) {
    const forces = [5, 3, 1]
    let ants = 0
    for (let i of forces) {
        if (hp % i === 0) {
            ants += parseInt(hp / i)
            return ants
        }else {
            ants += parseInt(hp / i)
            hp = hp % i
        }
    }
}