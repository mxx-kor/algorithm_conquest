function solution(numbers, k) {
    let ans = 0
    for (let i = 0; i < k; i++) {
        if (ans > numbers.length) ans -= numbers.length;
        ans += 2
    }
    return numbers[ans-2]
}