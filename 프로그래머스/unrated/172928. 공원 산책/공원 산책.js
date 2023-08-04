function solution(park, routes) {
    //[y, x]
    //draw map
    const parkMap = park.map(el => el.split(''))
    const n = parkMap.length - 1
    const m = parkMap[0].length - 1
    
    let row = park.findIndex((s) => s.includes("S"));
    let col = park[row].indexOf("S");
    
    routes.forEach(route => {
        const [d, t] = route.split(' ')
        let flag = false
        let tempRow = row
        let tempCol = col
        
        // 확인하고 이동
        for (let i = 0; i < Number(t); i++) {
            if (d === "E") tempCol++;
            else if (d === "W") tempCol--;
            else if (d === "S") tempRow++;
            else if (d === "N") tempRow--;
            //map 범위 초과, 장애물 존재시 무시
            if (
        tempRow > n ||
        tempRow < 0 ||
        tempCol > m ||
        tempCol < 0 ||
        park[tempRow][tempCol] === "X"
      ) {
                flag = true
                break
            } 
        }
        
        if (!flag) {
      col = tempCol;
      row = tempRow;
    }
    })

    return [row, col];
}