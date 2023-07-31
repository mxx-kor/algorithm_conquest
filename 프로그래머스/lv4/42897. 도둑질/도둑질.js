function solution(money) {
    if (money.length < 4) return Math.max(money)
    
    const arr1 = [0, ...money.slice(0, -1)]
    const arr2 = [0, ...money.slice(1)]
    
    const dp = (arr) => {
        for (let i = 2; i< arr.length; i++) {
            arr[i] = Math.max(arr[i - 1], arr[i - 2] + arr[i])
        }
        
        return arr.at(-1)
    }
    
    return Math.max(dp(arr1), dp(arr2));
}