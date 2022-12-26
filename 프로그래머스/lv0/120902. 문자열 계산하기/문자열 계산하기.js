function solution(my_string) {
    const arr = my_string.split(' ')
    let ans = Number(arr[0])
    arr.map((el, i) => {
        if (el === "+") {
            ans += Number(arr[i+1])
        }
        if (el === "-") {
            ans -= Number(arr[i+1])
        }
    })
    return ans
}