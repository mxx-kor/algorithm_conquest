function solution(str1, str2) {
    const upperStr1 = str1.toUpperCase()
    const upperStr2 = str2.toUpperCase()
    const engRegex = /^[A-Z]+$/
    
    const sliceTwoChar = (str) => {
        const strArr = []
        for (let i = 0; i < str.length - 1; i++) {
            const word = str[i] + str[i + 1]
            if (engRegex.test(word)) {
                strArr.push(word)   
            }
        }
        return strArr
    }
    
    const strArr1 = sliceTwoChar(upperStr1)
    const strArr2 = sliceTwoChar(upperStr2)
    
    const j = (arr1, arr2) => {
        const intersection = []
        const union = []
        if (arr1.length === 0 && arr2.length === 0) return 1
        arr2.forEach((item) => {
            if (arr1.indexOf(item) >= 0) {
                intersection.push(arr1.splice(arr1.indexOf(item), 1))
            }
            union.push(item)
        })
        
        union.push(...arr1)
        
        return intersection.length / union.length
    }
    
    const ans = j(strArr1, strArr2)
    
    return parseInt(ans * 65536)
}