function solution(s, skip, index) {
    let ans = ""
    const charArr = []
    
    for (let i = 0; i < 26; i++) {
        const currChar = String.fromCharCode(i + 97)
        if (!skip.includes(currChar)) {
            charArr.push(currChar)
        }
    }
    
    return s.split("").map((char) => charArr[(charArr.indexOf(char) + index) % charArr.length]).join("");
}