function solution(s) {
    const arr = s.split(" ")
    let total = Number(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "Z") {
            total -= Number(arr[i-1])
        }else {
            total += Number(arr[i])
        }
    }
    return total
}