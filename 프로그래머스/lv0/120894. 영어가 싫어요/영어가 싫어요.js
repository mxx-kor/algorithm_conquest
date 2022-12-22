function solution(numbers) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    arr.map((el, i) => {
        numbers = numbers.replaceAll(el, i)
    })
    return Number(numbers);
}