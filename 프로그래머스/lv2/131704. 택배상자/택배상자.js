function solution(order) {
    let onTruck = 0;
    const subConveyor = []
    let idx = 0
    for (let i = 1; i <= order.length; i++) {
        subConveyor.push(i)
        
        while (subConveyor.length && subConveyor.at(-1) === order[idx]) {
            subConveyor.pop()
            idx++
            onTruck++
        }
    }
    return onTruck;
}