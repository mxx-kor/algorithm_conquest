const getIntersection = (lines, standard, other) => {
    const x = ((lines[standard][1] * lines[other][2]) - (lines[standard][2] * lines[other][1])) / ((lines[standard][0] * lines[other][1]) - (lines[standard][1] * lines[other][0]))
    const y = ((lines[standard][2] * lines[other][0] - lines[standard][0] * lines[other][2]) / (lines[standard][0] * lines[other][1] - lines[standard][1] * lines[other][0]))
    return [x, y]
}

function solution(line) {
    const stars = [];
    
    //find intersection
    for (let i = 0; i < line.length; i++) {
        for (let j = i+1; j < line.length; j++) {
            const intersection = getIntersection(line, i, j)
            if (Number.isInteger(intersection[0]) && Number.isInteger(intersection[1])) {
                stars.push(intersection)
            }
        }
    }
    //draw stars
    const [maxX, maxY, minX, minY] = stars.reduce(([maxX, maxY, minX, minY], [x, y]) => [
        Math.max(maxX, x),
        Math.max(maxY, y),
        Math.min(minX, x),
        Math.min(minY, y),
      ],
      [
        Number.MIN_SAFE_INTEGER,
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
      ])
    
    const board = Array.from(Array(maxY - minY + 1), () => Array(maxX - minX + 1).fill('.'))
    stars.map(([x, y]) => board[maxY - y][x - minX] = '*')
    return board.map((el) => el.join(''))
}