function solution(arr) {
    const ans = [0, 0]
    
    // 전부다 1인지 전부다 0인지 확인하는 함수
    const isCompressible = (array) => {
        if (array.length === 1) return ans[array[0][0]]++
        
        let flag = true
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[0][0] !== array[i][j]) {
                    flag = false
                    break
                }
            }
        }
        
        if (flag) return ans[array[0][0]]++
        
        isCompressible(array.slice(0, array.length / 2).map((v) => v.slice(0, array.length / 2)))
        isCompressible(array.slice(0, array.length / 2).map((v) => v.slice(array.length / 2)))
        isCompressible(array.slice(array.length / 2).map((v) => v.slice(0, array.length / 2)))
        isCompressible(array.slice(array.length / 2).map((v) => v.slice(array.length / 2)))
    }
    
    isCompressible(arr)

    return ans;
}