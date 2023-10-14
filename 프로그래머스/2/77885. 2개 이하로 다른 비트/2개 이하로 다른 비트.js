function solution(numbers) {
    const ans = []
    numbers.forEach(number => {
        if (number % 2 === 0) return ans.push(number + 1)
        let oddBinary = ("0" + number.toString(2)).split("")
        const idx = oddBinary.lastIndexOf("0")
        oddBinary[idx] = "1"
        oddBinary[idx + 1] = "0"

        ans.push(parseInt(oddBinary.join(""), 2))
    })
    
    return ans
}