function solution(numbers) {
    const sorted_numbers = numbers.sort((a, b) => a - b)
    return Math.max(sorted_numbers[0] * sorted_numbers[1], sorted_numbers.at(-1) * sorted_numbers.at(-2))
}