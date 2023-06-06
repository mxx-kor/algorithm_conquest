function solution(routes) {
    let ans = 1
    const sortedRoutes = routes.sort((a, b) => a[0] - b[0])
    let out = sortedRoutes[0][1]
    for (let i = 1; i < sortedRoutes.length; i++) {
        const [carIn, carOut] = sortedRoutes[i]
        if (out < carIn) {
            ans++
            out = carOut
        }
        if (out > carOut) {
            out = carOut
        }
    }
    return ans
}