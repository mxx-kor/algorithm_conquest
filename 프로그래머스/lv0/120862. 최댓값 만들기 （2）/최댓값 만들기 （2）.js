function solution(numbers) {
    const sorted_numbers = numbers.sort((a, b) => a - b)
    const minTotal = sorted_numbers[0] * sorted_numbers[1]
    const maxTotal = sorted_numbers.at(-1) * sorted_numbers.at(-2)
    return minTotal >= maxTotal ? minTotal : maxTotal
}