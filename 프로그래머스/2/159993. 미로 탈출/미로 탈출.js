function solution(maps) {
    let startPoint = []
    let leverPoint = []
    
    maps.forEach((row, i) => {
        const col = row.split('')
        col.forEach((v, j) => {
            if (v === 'S') {
                startPoint = [i, j, 0]
            }
            if (v === 'L') {
                leverPoint = [i, j, 0]
            }
        })
    })
    
    const map1 = maps.map((row) => row.split(''))
    const map2 = maps.map((row) => row.split(''))
    
    const toLever = bfs(startPoint, map1, "L")
    const toEnd = bfs(leverPoint, map2, "E")
    if (toLever === -1 || toEnd === -1) return -1
    return toLever + toEnd
}

const bfs = (start, map, target) => {
    const row = map.length
    const col = map[0].length
    const dx = [0, 0, 1, -1]
    const dy = [1, -1, 0, 0]
    const copiedMap = [...map]
        
    const queue = [start]
    copiedMap[start[0]][start[1]] = "X"
        
    while (queue.length) {
        const [x, y, cnt] = queue.shift()
        for(let i=0; i<4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            if (nx >= 0 && nx < row && ny >= 0 && ny < col && copiedMap[nx][ny] !== "X") {
                if (copiedMap[nx][ny] === target) {
                    return cnt + 1
                }
                queue.push([nx, ny, cnt + 1])
                copiedMap[nx][ny] = "X"
            }   
        }
    }
        
    return -1
}