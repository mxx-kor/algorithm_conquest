function solution(polynomial) {
    const arr = polynomial.split(" + ")
    const xValues = []
    const values = []
    arr.map((el) => {
        if (el.includes('x')) {
            if (el === "x") {
               return xValues.push(1)
            }
            xValues.push(Number(el.slice(0, -1)))
        }else {
            values.push(Number(el))
        }
    })
    const xTotal = xValues.reduce((acc, curr) => acc + curr, 0)
    const total = values.reduce((acc, curr) => acc + curr, 0)
    
    if (xTotal > 0 && total > 0) {
        return xTotal === 1 ? `x + ${total}` : `${xTotal}x + ${total}`    
    } else if (xTotal > 0 && total === 0) {
        return xTotal === 1 ? `x` : `${xTotal}x`
    } else {
        return `${total}`
    }
}