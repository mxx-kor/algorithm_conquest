function solution(dirs) {
    let currentPosition = [0, 0]
    const direction = {
        "U": [-1, 0],
        "D": [1, 0],
        "R": [0, 1],
        "L": [0, -1],
    }
    const visited = new Set();
     
    dirs.split("").forEach((d) => {
        const [x, y] = currentPosition
        const nx = x + direction[d][0]
        const ny = y + direction[d][1]
        
        if (nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5) {
            visited.add(`${x}${y}${nx}${ny}`)
            visited.add(`${nx}${ny}${x}${y}`)
            currentPosition = [nx, ny]
        }
    })
    
    return visited.size / 2
}