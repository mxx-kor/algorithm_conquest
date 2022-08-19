function solution(arr) {
    var answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
        const lcm = (a, b) => a * b / gcd(a, b);
        answer = lcm(answer, arr[i])
    }
    return answer;
}
