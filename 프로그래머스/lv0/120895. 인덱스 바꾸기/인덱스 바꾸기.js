function solution(my_string, num1, num2) {
    let ans = my_string.split('')
    ans[num1] = my_string[num2]
    ans[num2] = my_string[num1]
    
    return ans.join("")
}