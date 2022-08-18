function solution(bridge_length, weight, truck_weights) {
    let onBridge = [];
    for (let i = 0; i < bridge_length; i ++) {
        onBridge.push(0)
    }
    let time = 0;
    while (onBridge.length > 0) {
        time ++
        onBridge.shift()
        if (truck_weights.length) {
            let sum = onBridge.reduce((accumulator, current)=> accumulator + current, 0);
            if (sum + truck_weights[0] <= weight) {
                onBridge.push(truck_weights.shift())
            }else {
                onBridge.push(0)
            }
        }
    }
    return time;
}