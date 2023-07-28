function solution(wallpaper) {
    const arrX = []
    const arrY = []
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
                if (wallpaper[i][j] === "#") {
                    arrX.push(i)
                    arrY.push(j)
                }
        }
    }
    arrX.sort((a, b) => a - b)
    arrY.sort((a, b) => a - b)
    
    return [arrX[0], arrY[0], arrX.at(-1) + 1, arrY.at(-1) + 1];
}